from fastapi import Request, HTTPException, status
from utils import get_user_by_id
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

def get_current_user(request: Request):
    token = request.cookies.get('access_token')
    
    if token is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail={'Message': 'no authenticate'}
        )
    
    try:
        payload  = decode_access_token(token)
        user_id  = payload.get('sub')
        if user_id is None:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail={'Message': 'Invalid token'}
            )
        return get_user_by_id(user_id)
        
    except Exception as error:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail={'Message': str(error)}
        )
    except jwt.PyJWTError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail={'Message': str(error)}
        )