from sqlalchemy import Column, Integer, String, DateTime, func
from sqlalchemy.orm import relationship
from database import Base

class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    username = Column(String(100), nullable=False, unique=True)
    email = Column(String(255), nullable=False, unique=True)
    password = Column(String(254), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    cart_table = relationship('Cart', back_populates='user')
    

def __repr__(self):
    return f'id = {self.id}, name = {self.name}, username = {self.username}, email = {self.email}, password = {self.password}, created_at = {self.created_at}'