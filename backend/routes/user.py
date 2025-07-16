from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session
from sqlalchemy import and_
from database import get_db
from models import User
from schemas import UserCreate, UserRead, UserLogin, UserUpdate, UserDelete
from utils import search_user
from auth import hash_password, verify_password, create_access_token, get_current_user


router = APIRouter()

@router.post('/login')
def login (user:UserLogin, db:Session = Depends(get_db)):
    try:
        user_db = db.query(User).filter(User.username == user.username).first()
        if not user_db:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail={'Message': ' User not found'}
            ) 
        if not verify_password(user.password, user_db.password):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail={'Message': 'Invalid credentials'}
            )
        token = create_access_token({'sub': str(user_db.id)})
        response = JSONResponse(
            status_code=status.HTTP_200_OK,
            content={'Message': 'Login successful'}
        )
        response.set_cookie(
            key='access_token',
            value=token
        )
        return response
    except Exception as error:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail={'Message': str(error)}
        )
        
@router.post('/register')
def register(user: UserCreate, db:Session = Depends(get_db)):
    try:
        user_db = search_user(user, db)
        
        if user_db:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail={'Message': 'The user already exists'}
            )
        user.password = hash_password(user.password)
        user.email = user.email.lower()
            
        new_user = User(**user.model_dump())
        
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        
        return {'Message': 'User created', 'Response': user}
    except Exception as e:
        raise HTTPException(status_code=500, detail={"Message": str(e)})

@router.patch('/update')
def user_update(update_data:UserUpdate, user: User = Depends(get_current_user), db:Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user.id).first()
    
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={'Message': ' User not found'}
        )
    
    new_data = update_data.dict(exclude_unset=True)
    
    for key, value in new_data.items():
        setattr(user, key, value)
    
    db.commit()
    db.refresh(user)
    
    return UserRead(**user.__dict__)

@router.delete('/delete')
def user_delete(password:UserDelete, user: User = Depends(get_current_user), db:Session = Depends(get_db)):
    try:
        user_db = db.query(User).filter(and_(User.id == user.id, User.password == password)).first()
        
        if not user_db:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail={'Message': 'Invalid credentials'}
            )
        
        db.delete(user_db)
        db.commit()
        return {'Message': 'Deleted user'}
    except Exception as error:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail={'Message': str(error)}
        )
    

@router.get('/all')
def get_user(db:Session = Depends(get_db)):
    try:
        users = db.query(User).all()
        if not users:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail={'Message': 'users not found'}
            )
        return users
    except Exception as error:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail={'Message': str(error)}
        )

@router.get('/')
def get_user(user:UserRead, db:Session = Depends(get_db)):
    user_db = search_user(user, db)
    
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail={'Message': 'User not found'}
        )
    
    info_user = {
        'id': user_db.id,
        'name': user_db.name,
        'username': user_db.username,
        'email': user_db.email
    }
    
    return info_user
#  py main.py