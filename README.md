# CodeAlpha URL Shortener

## Project Overview

CodeAlpha URL Shortener is a backend web application developed using Node.js, Express.js, MongoDB Atlas, and Mongoose. The application allows users to convert long URLs into short, unique URLs and redirects users to the original website when the shortened URL is accessed.

This project was developed as part of the CodeAlpha Backend Development Internship Program.

---

## Features

- Generate unique short URLs for long website links
- Store URL mappings in MongoDB Atlas
- Redirect users from short URLs to original URLs
- RESTful API implementation using Express.js
- Database integration using Mongoose
- API testing using Postman
- Clean and modular project structure

---

## Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB Atlas
- Mongoose

### Tools
- Postman
- Git
- GitHub
- IntelliJ IDEA / Visual Studio Code

---

## Project Structure

```text
CodeAlpha_URLShortener
│
├── models
│   └── Url.js
│
├── routes
│   └── urlRoutes.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

---

## Screenshots

### Postman API Testing

![Postman Testing](screenshots/postman-test.png)

### MongoDB Atlas Database

![MongoDB Data](screenshots/mongodb-data.png)

---

## API Endpoints

### Create Short URL

**POST** `/shorten`

#### Request Body

```json
{
  "originalUrl": "https://www.google.com"
}
```

#### Response

```json
{
  "message": "Short URL created successfully",
  "shortUrl": "http://localhost:5000/abc123"
}
```

---

### Redirect to Original URL

**GET** `/:shortCode`

#### Example

```http
GET /abc123
```

When the short URL is accessed, the application redirects the user to the original URL stored in the database.

---

## Database Schema

### URL Collection

```json
{
  "_id": "ObjectId",
  "originalUrl": "https://www.google.com",
  "shortCode": "abc123"
}
```

---

## Installation and Setup

### Clone the Repository

```bash
git clone https://github.com/your-username/CodeAlpha_URLShortener.git
cd CodeAlpha_URLShortener
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the root directory.

```env
MONGO_URI=your_mongodb_connection_string
```

### Run the Application

```bash
npm run dev
```

Server will start on:

```text
http://localhost:5000
```

---

## Testing

The API endpoints were tested using Postman.

### Test Create Short URL

```http
POST http://localhost:5000/shorten
```

### Test Redirect

Open the generated short URL in a browser to verify successful redirection to the original URL.

---

## Learning Outcomes

- Backend development using Node.js and Express.js
- REST API design and implementation
- MongoDB Atlas database integration
- Data modeling with Mongoose
- Environment variable management
- API testing with Postman
- Version control using Git and GitHub

---

## Author

Anuvardhini T

Backend Development Intern – CodeAlpha
