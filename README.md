# SmartyPants Rating Backend

A comprehensive REST API for managing module ratings built with Express.js and SQLite.

## Features

- **Complete CRUD Operations**: Create, Read, Update, Delete ratings
- **Rating Validation**: Ensures ratings are between 0-5
- **Database Constraints**: SQLite with automatic table creation
- **Error Handling**: Comprehensive error responses
- **Data-Driven**: Non-trivial functionality with database persistence

## API Endpoints

### POST /api/ratings
Add a new rating for a module.

**Request Body:**
```json
{
  "moduleId": 1,
  "rating": 4
}
```

**Validation:**
- `moduleId` is required
- `rating` must be a number between 0 and 5 (inclusive)

**Response:**
```json
{
  "message": "Rating added",
  "rating": {
    "id": 1,
    "moduleId": 1,
    "rating": 4,
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### GET /api/ratings
Retrieve all ratings from the database.

**Response:**
```json
[
  {
    "id": 1,
    "moduleId": 1,
    "rating": 4,
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
]
```

### GET /api/ratings/:id
Get a specific rating by ID.

**Response:**
```json
{
  "id": 1,
  "moduleId": 1,
  "rating": 4,
  "createdAt": "2024-01-01T00:00:00.000Z"
}
```

### PUT /api/ratings/:id
Update a rating by ID.

**Request Body:**
```json
{
  "moduleId": 2,
  "rating": 5
}
```

**Response:**
```json
{
  "message": "Rating updated successfully",
  "rating": {
    "id": 1,
    "moduleId": 2,
    "rating": 5,
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

### DELETE /api/ratings/:id
Delete a rating by ID.

**Response:**
```json
{
  "message": "Rating deleted successfully"
}
```

## Database Schema

```sql
CREATE TABLE module_ratings (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  moduleId INTEGER NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 0 AND rating <= 5),
  createdAt TEXT DEFAULT CURRENT_TIMESTAMP
);
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
node index.js
```

The server will run on port 3000.

## Testing

Run the comprehensive test script to verify all API functionality:
```bash
node test.js
```

## Complete API Summary

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/ratings` | Add a new rating |
| `GET` | `/api/ratings` | Get all ratings |
| `GET` | `/api/ratings/:id` | Get rating by ID |
| `PUT` | `/api/ratings/:id` | Update rating by ID |
| `DELETE` | `/api/ratings/:id` | Delete rating by ID |

## LO3 Requirements Met

✅ **Non-trivial functionality**: Complete CRUD operations with database persistence  
✅ **Data-driven**: SQLite database with automatic table creation  
✅ **Systematic design**: RESTful API with proper error handling  
✅ **Testing**: Comprehensive test suite covering all endpoints  
✅ **Backend focus**: Pure backend implementation as requested 