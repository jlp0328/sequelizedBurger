var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var mysql = require("mysql");
var exphbs = require("express-handlebars");

var app = express();
var port = process.env.PORT || 8080;

var db = require("./models");
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers2_db"
});

require("./routes/api-routes.js")(app);

// Starting our express app

//Need to synchronize with the database. We do not want to run the database until the database has been initialized. Promise-based (.then)...Don't want to start server until we are connected to our database.

db.sequelize.sync().then(function() {
  app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
});
