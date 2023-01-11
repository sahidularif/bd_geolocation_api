const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const port = 5000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.get("/", (req, res) => {
    res.send({ message: "Welcome to bd geolocation api" })
});


// Server Liseting 
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})