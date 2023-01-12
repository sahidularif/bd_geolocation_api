const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const {routes} = require('./routes/route');
const port = 5000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

require('./database')();
app.use('/api/v1.0', routes);
app.get("/", (req, res) => {
    res.send({ message: "Welcome to bd geolocation api" })
});


// Server Liseting 
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

app.use((err, req, res, next) => {
    if (res.headersSent) {
        next()
    } else {
        if(err.message){
            res.status(500).send(err.message)
        } else {
            res.send('There was an error')
        }
    }
})