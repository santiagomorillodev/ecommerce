from pydantic import BaseModel

class PurchasedBase(BaseModel):
    product_id: str
    user_id: str
    
class PurchasedCreate(PurchasedBase):
    pass

class PurchasedRead(PurchasedBase):
    pass