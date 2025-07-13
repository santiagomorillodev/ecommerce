from pydantic import BaseModel, EmailStr, constr

class UserBase(BaseModel):
    username:str
    password:str
    name:str
    email:EmailStr
    
class UserCreate(UserBase):
    pass

class UserRead(UserBase):
    pass

class UserLogin(BaseModel):
    username: str
    password: str