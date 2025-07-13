from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from .base import Base

DB_URL = 'postgresql+psycopg2://root:fudumtdcGD5o7JmAl4EQCFxSUAAHvB4T@dpg-d1ortrs9c44c73fvbkeg-a.oregon-postgres.render.com/ecommerce_db_2g05'
engine = create_engine(DB_URL, pool_pre_ping=True, echo=False)
SessionLocal = sessionmaker(autoflush=False, autocommit=False, bind=engine)


def init_db():
    Base.metadata.create_all(engine)