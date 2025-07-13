from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from sqlalchemy import or_
from database import get_db
from models import Cart, User
from schemas import UserCreate, UserRead, CartCreate, CartRead
from utils import search_user


router = APIRouter()

@router.get('/')
def get_products(user:UserRead, db:Session = Depends(get_db)):
    user_db = search_user(user, db)
    

@router.get('/all')
def get_user(db:Session = Depends(get_db)):
    users = db.query(User).all()
    return users

@router.post('/')
def add_to_cart(user: UserCreate, db:Session = Depends(get_db)):
    try:
        user_db = db.query(User).filter(
            or_(User.username == user.username, User.email == user.email)).first()
        
        if user_db :
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
    

#  py main.py