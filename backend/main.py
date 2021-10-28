from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from model import Reservation

#App Object
app = FastAPI()

from database import (
    fetch_one_reservation,
    fetch_all_reservation,
    create_reservation,
    update_reservation,
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
    return {"Index":"Page"}

@app.get("/reservation")
async def get_reservation():
    response = await fetch_all_reservation()
    return response

@app.get("/reservation{phone}", response_model=Reservation)
async def get_reservation_by_phone(phone):
    response = await fetch_one_reservation(phone)
    if response:
        return response
    raise HTTPException(404, f"there is no TODO item with this phone {phone}")

@app.post("/reservation", response_model=Reservation)
async def post_reservation(data:Reservation):
    response = await create_reservation(data.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong / Bad request")

@app.put("/reservation{phone}", response_model=Reservation)
async def put_reservation(contact_name:str, contact_type:str, phone:str, birthdate:str, descriptions:str):
    response = await update_reservation(contact_name, contact_type, phone, birthdate, descriptions)
    if response:
        return response
    raise HTTPException(404, f"there is no TODO item with this phone {phone}")

@app.delete("/reservation{phone}")
async def delete_reservation(phone):
    response = await remove_reservation(phone)
    if response:
        return "Succesfully deleted reservation item !"
    raise HTTPException(404, f"there is no TODO item with this phone {phone}")
