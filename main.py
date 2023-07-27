from fastapi import FastAPI
from db import customers
app = FastAPI()

@app.get('/api/customers')
async def select(): 
    return customers.select()

@app.get('/api/customers/{id}')
async def sayname(id):
    return customers.selectById(id)