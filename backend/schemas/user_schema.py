from pydantic import BaseModel, EmailStr, constr
from typing import Optional

class UserBase(BaseModel):
    username:str
    name:str
    email:EmailStr
    
class UserCreate(UserBase):
    password:str

class UserRead(UserBase):
    pass

class UserLogin(BaseModel):
    username: str
    password: str
    
class UserDelete(BaseModel):
    password: str

class UserUpdate(BaseModel):
    username:Optional[str] = None
    password:Optional[str] = None
    name:Optional[str] = None
    email:Optional[EmailStr] = None