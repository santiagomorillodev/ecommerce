from sqlalchemy.orm import Session
from sqlalchemy import or_
from models import User

def search_user(user: User, db:Session):
    user_db =  db.query(User).filter(
            or_(User.username == user.username, User.email == user.email)).first()
    
    if not user_db:
        return None
    
    return user_db

def get_user_by_id (user: User, db:Session):
    return db.query(User).filter(User.id == user.id).first()