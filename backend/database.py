from model import Reservation

# MongoDB driver
import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017/')
database = client.Reservation
collection = database.reservation

async def fetch_one_reservation(phone):
    document = await collection.find_one({"phone":phone})
    return document

async def fetch_all_reservation():
    reservations = []
    cursor = collection.find({})
    async for document in cursor:
        reservations.append(Reservation(**document))
    return reservations

async def create_reservation(reservation):
    document = reservation
    result = await collection.insert_one(document)
    return result

async def update_reservation(contact_name, contact_type, phone, birthdate, descriptions):
    await collection.update_one({"contact_name":contact_name, "contact_type":contact_type, "phone":phone, "birthdate":birthdate, "descriptions":descriptions})
    document = await collection.find_one({"phone":phone})
    return document

async def remove_reservation(phone):
    await collection.delete_one({"phone":phone})
    return True