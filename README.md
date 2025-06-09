# Athena Cyber Watchtower

This project provides a React/TypeScript frontend for a cybersecurity risk dashboard. To complement the UI, two example backends are included:

- **FastAPI** (Python)
- **Express** (Node.js)

Each backend exposes similar endpoints used by the frontend (`/login`, `/dashboard`, `/vendors`). These implementations return mocked data and should be replaced with real integrations in production.

## Running the FastAPI backend

```bash
cd backend/fastapi
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

## Running the Node.js backend

```bash
cd backend/node
npm install
npm start
```

Both servers will start on port `8000` (FastAPI default) or `3000` (Node.js default). Adjust the frontend configuration to point to the desired backend URL.
