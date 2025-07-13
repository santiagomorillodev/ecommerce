from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from database import get_db
from models import User
from schemas import UserCreate, UserRead, UserLogin
from utils import search_user

router = APIRouter()

@router.post('/login')
def login (user:UserLogin, db:Session = Depends(get_db)):
    user_db = db.query(User).filter(User.username == user.username).first()
    return user_db
        
@router.post('/register')
def register(user: UserCreate, db:Session = Depends(get_db)):
    try:
        user_db = search_user(user, db)
        
        if user_db:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT,
                detail={'Message': 'The user already exists'}
            )
            
        new_user = User(**user.model_dump())
        
        db.add(new_user)
        db.commit()
        db.refresh(new_user)
        
        return {'Message': 'User created', 'Response': user}
    except Exception as e:
        raise HTTPException(status_code=500, detail={"Message": str(e)})


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