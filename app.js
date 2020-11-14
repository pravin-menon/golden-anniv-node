const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var port = process.env.PORT;

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/gallery", function(req, res) {
    res.sendFile(__dirname + "/gallery.html");
});

app.listen(port || 3000, function() {
    console.log("Server running on port " + port);
});