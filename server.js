//DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");

//PORT
var PORT = process.env.PORT || 8080;

// BodyParser to interpret data sent to server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Directs server to CSS and JS static routing files
app.use(express.static(path.join(__dirname + '/app/public')));

// Directs server to proper routing files;
require("./app/routing/htmlRoutes.js")(app);


// PORT LISTENER FUNCTION: "starts" the server and listens for an event
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});