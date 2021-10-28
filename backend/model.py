from pydantic import BaseModel

class Reservation(BaseModel):
    contact_name: str
    contact_type: str
    phone: str
    birthdate: str
    descriptions: str