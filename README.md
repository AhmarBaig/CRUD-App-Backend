# CRUD Application - Backend
This is a simple CRUD application using JavaScript, NodeJS, Express and MongoDB. It is essentially the MERN stack without the "R".

# Overview
The CRUD application is an API that uses a NodeJS backend to connect to the data stored within a MongoDB database, and uses Express for routing.

The program is organized into multiple folders. 
```
>>> /controllers: contains asynchronous CRUD logic for the Product
>>> /models: contains the Product Schema
>>> /routes: contains the CRUD routing
>>> index.js: contains the application, middleware and connection to MongoDB
```

# Usage
This application can be used to gain some familiarity with APIs and CRUD apps. The project can be ran locally using nodemon. Simply type:
```
npm run dev
```
- NOTE: Ensure that node and nodemon are installed as well.

Using Insomnia/Postman/other API testing tools, the routes can be tested to create, read, update and delete the data from the MongoDB backend.
- Data is formed as shown below
```
{
	"_id": "67eeda1fa86c094c2946c99f",
	"name": "pancake",
	"quantity": 20,
	"price": 3.99,
	"createdAt": "2025-04-03T18:57:35.642Z",
	"updatedAt": "2025-04-03T18:57:35.642Z",
	"__v": 0
}
```
- The JSON contains the required fields: name, quantity, and price.
- The Product Schema also contains an image field, but is not required.
- Lastly, the Schema contains a timestamps field that auto-generates the creation and update timestamps.
