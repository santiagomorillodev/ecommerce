from datetime import datetime, timedelta
import jwt

SECRET = '3f8b7c9a2d5e4f1a6b9c8d7e0a2c1b3d4f5e6a7c8b9d0e1f2a3c4b5d6e7f8a9'
ALGORITHM = "HS256"
ACCESS_TOKEN_DURATION = 60

def create_access_token(data:dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=ACCESS_TOKEN_DURATION))
    to_encode.update({'exp': expire})
    return jwt.encode(to_encode, SECRET, algorithm=ALGORITHM)

def decode_access_token(token: str):
    return jwt.decode(token, SECRET, algorithms=[ALGORITHM])