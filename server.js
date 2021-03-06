var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var favicon = require('serve-favicon');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Routes
// =============================================================
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//var routes = require("./models/burger.js");
var routes = require("./controllers/burgerController.js");
app.use(routes);
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
