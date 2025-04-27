# LiaPlusAI_Assignment-Backend

# User FeedBack System

This is the backend server for the **User Feedback System** built with **Node.js**, **Express.js**, and **MongoDB**.  
It allows users to submit feedback, which is stored securely in a MongoDB database.

## Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** (with **Mongoose**)

You can install the dependencies using the integrated terminal in Visual Studio Code:

```bash
npm i or npm ci
```

## Project Structure
```
├── controller/
│   └── feedbackController.js
├── db/
│   └── dbConnection.js
├── model/
│   └── feedBack.js
├── route/
│   └── feedBack.js
├── app.js
├── package.json
├── .env
├── .gitignore
└── README.md


## How to Run in Visual Studio Code
1. Open the project folder in Visual Studio Code.
2. Open the integrated terminal using **Ctrl + `** (backtick).
3. Run the application(Automatic reload on any change):
```bash
nodemon start or nodemon app.js
```

5. Access the API endpoints at `http://localhost:5000`.
example = `http://localhost:8000/feedback/get`

## API Endpoints
### 1. Get the User FeedBacks
- **Endpoint**: `/feedback/get`
- **Method**: GET
- **Response**: `{ "data": feedBacks }` (In JSON Format)

### 2. Save the User FeedBack
- **Endpoint**: `/feedback/save`
- **Method**: POST
- **Response**: `{ "data": "Data Saved Successfully" }` (In JSON Format)