var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.port || 8080;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("app/public/home.html"));

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);