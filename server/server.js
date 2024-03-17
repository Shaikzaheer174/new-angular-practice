// as we required express, body-parser and cors so defined
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// port to run express server
const PORT = 4201;

// instance of express server
const server = express();

server.use(bodyParser.json());
server.use(cors());

server.get("/", function (req, res) {
  res.send("Hello, world!");
});

server.listen(PORT, function () {
  console.log("server listening on port: " + PORT);
});

// adding endpoint to which angular app will post the formData
server.post("/register", function (req, res) {
    console.log(req.body);
    res.status(401).send({
        "message": "data received successfully"
    });
})