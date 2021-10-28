from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from model import Reservation

#App Object
app = FastAPI()

from database import (
    fetch_one_reservation,
    fetch_all_reservations,
    create_reservation,
    update_todo,
    remove_reservation,
)

origins = ['https://localhost:3000/']

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

@app.get("/")
def read_root():
    return {"Hello":"World"}

@app.get("/reservations")
async def get_reservations():
    response = await fetch_all_reservations()
    return response

@app.get("/reservations{phone}", response_model=Reservation)
async def get_reservations_by_phone(phone):
    response = await fetch_one_reservation(phone)
    if response:
        return response
    raise HTTPException(404, "there is no TODO item with this phone {phone}")

@app.post("/reservations", response_model=Reservation)
async def post_reservations(data:Reservation):
    response = await create_reservation(data.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong / Bad request")
    return {"POST":"Reservations"}

@app.put("/reservations{phone}", response_model=Reservation)
async def put_reservations(contact_name:str, contact_type:str, phone:str, birthdate:str, descriptions:str):
    response = await update_reservation(contact_name, contact_type, phone, birthdate, descriptions)
    if response:
        return response
    raise HTTPException(404, f"there is no TODO item with this phone {phone}")

@app.delete("/reservations{phone}")
async def delete_reservations(phone):
    response = await remove_reservation(phone)
    if response:
        return response
    raise HTTPException(404, f"there is no TODO item with this phone {phone}")
