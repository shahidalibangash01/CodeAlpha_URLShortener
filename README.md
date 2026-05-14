# CodeAlpha_URLShortener

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

A lightweight URL Shortener REST API built with Express.js and MongoDB. This project was developed as Task 1 of the CodeAlpha Backend Development Internship.

---

## Features

- Shorten any long URL into a compact short code
- Redirect users from the short URL to the original URL
- Track how many times each short link has been visited
- View stats for any shortened URL (clicks, date created)
- Simple frontend UI to use the app directly in the browser
- Environment-based configuration via `.env`

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js | JavaScript Runtime |
| Express.js | Web Framework |
| MongoDB | NoSQL Database |
| Mongoose | MongoDB ODM |
| Nanoid | Short Code Generator |
| Dotenv | Environment Variables |
| CORS | Cross-Origin Support |

---

## Project Structure

```
CodeAlpha_URLShortener/
│
├── config/
│   └── db.js            # MongoDB connection
│
├── models/
│   └── Url.js           # URL schema
│
├── routes/
│   └── Url.js           # API route handlers
│
├── public/
│   └── index.html       # Frontend UI
│
├── .env                 # Environment variables (not committed)
├── .gitignore
├── index.js             # Server entry point
└── package.json
```

---

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/shahidalibangash01/CodeAlpha_URLShortener.git
cd CodeAlpha_URLShortener
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create a `.env` file in the root directory
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/urlshortener
BASE_URL=http://localhost:5000
```

### 4. Make sure MongoDB is running on your machine, then start the server
```bash
# Development
npm run dev

# Production
npm start
```

The server will start at `http://localhost:5000`

---

## API Endpoints

### POST /api/shorten
Shortens a long URL.

**Request body:**
```json
{
  "originalUrl": "https://www.example.com/very/long/url"
}
```

**Response:**
```json
{
  "shortUrl": "http://localhost:5000/ab3xZ9",
  "shortCode": "ab3xZ9",
  "originalUrl": "https://www.example.com/very/long/url"
}
```

---

### GET /:shortCode
Redirects to the original URL associated with the short code.

---

### GET /api/stats/:shortCode
Returns stats for a specific short URL.

**Response:**
```json
{
  "originalUrl": "https://www.example.com/very/long/url",
  "shortCode": "ab3xZ9",
  "clicks": 42,
  "createdAt": "2026-05-05T10:00:00.000Z"
}
```

---

## Database Schema

```js
{
  originalUrl: String,   // The original long URL
  shortCode:   String,   // Unique 6-character identifier
  clicks:      Number,   // Visit count (default: 0)
  createdAt:   Date      // Auto-generated timestamp
}
```

---

## Testing

You can test the API using Postman:

1. Send a `POST` request to `/api/shorten` with the URL in the request body
2. Copy the `shortUrl` from the response
3. Open it in your browser — it will redirect to the original URL
4. Check `/api/stats/:shortCode` to see the updated click count

Or simply open `http://localhost:5000` in your browser to use the frontend UI.

---

## Internship Context

This project was built as part of the **CodeAlpha Backend Development Internship**.

- Company: [CodeAlpha](https://www.codealpha.tech)
- Intern: Shahid Ali
- Domain: Backend Development
- Year: 2026

---

## Contact

**Shahid Ali**
- LinkedIn: [linkedin.com/in/shahid-ali](https://www.linkedin.com/in/shahid-ali-bangash)
- GitHub: [github.com/shahidalibangash01](https://github.com/shahidalibangash01)

---

## License
 
This project was built as part of the CodeAlpha Backend Development Internship.
