const express = require('express');
const app = express();
const Product = require('./models/product.model.js')
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');

// JSON cannot be passed normally to the app.
// You need to use middleware. The line of code below is apparently middleware
app.use(express.json());
// The below middleware allows for "form url encoded" data
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send("Hello from Node API");
});

mongoose.connect("mongodb+srv://ahmarbaig2000:Pm6pqofI8lL8jwpQ@backend.mu2531x.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend")
.then(() => {
    console.log('Connected to Database!');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(() => {
    console.log("Connection failed")
})