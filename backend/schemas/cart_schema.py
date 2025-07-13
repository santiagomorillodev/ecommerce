from pydantic import BaseModel

class CartBase(BaseModel):
    product_id: str
    user_id: str
    
class CartCreate(CartBase):
    pass

class CartRead(CartBase):
    pass