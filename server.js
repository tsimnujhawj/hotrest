
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

let app = express();
let PORT = 3000;

//Starts the server to begin listening
app.listen(PORT, function(){
    console.log("Listening at PORT " + PORT);
});

//Routing the differet pages
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});