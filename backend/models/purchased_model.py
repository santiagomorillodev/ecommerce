from sqlalchemy import Column, Integer
from database import Base

class Purchased(Base):
    __tablename__ = 'purchased'
    product_id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, nullable=False)
    
def __repr__(self):
    return f'product_id = {self.product_id}, user_id = {self.user_id}'