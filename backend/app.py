from fastapi import FastAPI, Depends, HTTPException, status
from database import init_db, get_db
from sqlalchemy.orm import Session
from routes import user_router

init_db()

app = FastAPI()
app.include_router(user_router, prefix='/user', tags=['user'])

@app.get('/')
def home(db: Session = Depends(get_db)):
    try:
        return {'message': 'Hello world'}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail={'Message': str(e)}
        )