//DEPENDENCIES
var path = require("path");


//ROUTING

module.exports = function(app) {
  // HTML GET Requests
  // Below code for when user goes to certain page.
  // In each of the below cases the user is directed to the proper HTML page of content

  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/aboutus.html"));
  });

  // If there is no matching route then default to home
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};