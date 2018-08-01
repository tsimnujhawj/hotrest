
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

let app = express();
let PORT = 3000;

//Starts the server to begin listening
app.listen(PORT, function () {
    console.log("Listening at PORT " + PORT);
});

//Routing the differet pages
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

//Display data
var reservationArray = [
    {
        name: "Anh",
        number: 9384820,        
        email: "anh@gmail.com",
        id: 1
    },
    {
        name: "Sujathe",
        number: 2340980,
        email: "sujathe@gmail.com",
        id: 2
    },
    {
        name: "Tsimnuj",
        number: 9023430,
        email: "tsimnuj@gmail.com",
        id: 3
    },
    {
        name: "Gary",
        number: 9203900,
        email: "gary@gmail.com",
        id: 4
    },
];

reservationArray.push(reservation);

console.log(reservationArray);

function reservation(name, number, email, uniqueID) {
    this.name = name;
    this.number = number;
    this.email = email;
    this.uniqueID = uniqueID;
}







  // POST
