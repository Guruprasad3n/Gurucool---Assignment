# URL Shortener Service

This project is a URL Shortener service built with Node.js, Express.js, and MongoDB. It allows users to shorten long URLs and provides a simple user authentication system with registration and login functionalities.

## Features

- Shorten long URLs.
- Retrieve original URLs using the shortened version.
- User registration and login for secure access.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcrypt.js
- shortid

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Guruprasad3n/Gurucool---Assignment
   ```

2. Navigate to the project directory:

   ```bash
   cd Gurucool---Assignment
   ```

3. Install the dependencies:

   ```bash
   cd Gurucool---Assignment
   ```

4. Create a `.env` file in the root directory and add the following environment variables:

   ```bash
   MONGO_URI=your_mongo_uri
   JWT_SECRET=your_jwt_secret
   PORT=your_port 
   ```

5. Start the server:

   ```bash
   npm start
   ```

## API Endpoints

### User Authentication

- Register a new user

  - URL: /user/register
  - Method: `POST`
  - Body

  ```
  {
  "name": "yourname",
  "username": "yourusername",
  "password": "yourpassword"
  }
  ```

- Login a user

  - URL: /user/login
  - Method: `POST`
  - - Body

  ```
  {
  "username": "yourusername",
  "password": "yourpassword"
  }
  ```

## URL Shortening

- Shorten a URL
  - URL: /shorten
  - Method: `POST`
  - Headers: { "Authorization": "Your_Token" }
  - Body
  ```
  {
  "originalUrl": "Your URL"
  }
  ```
- Redirect to Original URL
  - URL: /:shortUrl
  - Method `GET`
