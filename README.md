# Express MongoDB API - Prov Path

Express.js API server with MongoDB integration for managing provincial data with fields: kode, nama, ibukota, and path.

## Features

- Express.js REST API
- MongoDB integration with Mongoose
- CRUD operations for provincial data
- Environment variable configuration

## Installation

```bash
npm install
```

## Configuration

1. Copy `.env.example` to `.env`:
```bash
copy .env.example .env
```

2. Update `.env` with your MongoDB connection string:
```
MONGODB_URI=mongodb://localhost:27017/prov-path
PORT=3000
```

For MongoDB Atlas, use:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/prov-path
```

## Running the Server

### Production mode:
```bash
npm start
```

### Development mode (with nodemon):
```bash
npm run dev
```

The server will start on `http://localhost:3000`

## API Endpoints

### Get all data
```
GET /api/data
```

**Response:**
```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "kode": "11",
      "nama": "Aceh",
      "ibukota": "Banda Aceh",
      "path": "/aceh"
    }
  ]
}
```

### Get data by ID
```
GET /api/data/:id
```

### Get data by kode
```
GET /api/data/kode/:kode
```

Example: `GET /api/data/kode/11`

### Create new data
```
POST /api/data
Content-Type: application/json

{
  "kode": "11",
  "nama": "Aceh",
  "ibukota": "Banda Aceh",
  "path": "/aceh"
}
```

## Database Schema

The Data model has the following fields:

- `kode` (String, required) - Province code
- `nama` (String, required) - Province name
- `ibukota` (String, required) - Capital city
- `path` (String, required) - URL path
- `timestamps` - Automatically added createdAt and updatedAt

## Project Structure

```
prov-path/
├── models/
│   └── Data.js          # MongoDB schema
├── routes/
│   └── dataRoutes.js    # API routes
├── .env                 # Environment variables (not in git)
├── .env.example         # Example environment variables
├── server.js            # Main application file
└── package.json         # Dependencies and scripts
```

## Testing with curl

```bash
# Get all data
curl http://localhost:3000/api/data

# Create new data
curl -X POST http://localhost:3000/api/data ^
  -H "Content-Type: application/json" ^
  -d "{\"kode\":\"11\",\"nama\":\"Aceh\",\"ibukota\":\"Banda Aceh\",\"path\":\"/aceh\"}"

# Get by kode
curl http://localhost:3000/api/data/kode/11
```

## Notes

- Make sure MongoDB is running before starting the server
- The collection name is set to `provinsi` in the model (can be changed in `models/Data.js`)
- All timestamps are automatically managed by Mongoose
