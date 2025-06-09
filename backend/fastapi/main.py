from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

app = FastAPI()

class LoginRequest(BaseModel):
    username: str
    password: str

@app.post("/login")
def login(req: LoginRequest):
    if req.username == "admin" and req.password == "password":
        return {"token": "fake-jwt-token"}
    raise HTTPException(status_code=401, detail="Invalid credentials")

@app.get("/dashboard")
def dashboard():
    return {
        "riskTrendData": [
            {"date": "2023-01-01", "riskScore": 80},
            {"date": "2023-02-01", "riskScore": 70},
        ]
    }

vendor_data = [
    {"id": 1, "name": "Vendor A", "risk": 75},
    {"id": 2, "name": "Vendor B", "risk": 60},
]

@app.get("/vendors")
def get_vendors():
    return vendor_data
