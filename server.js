// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Imports
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");
var friendDataRoute = require("./app/data/friends.js");

htmlRoutes.homePage(app);
htmlRoutes.surveyPage(app);

var friendData = friendDataRoute.friendData;

apiRoutes.apiRoute(app, friendData);
apiRoutes.apiPost(app, friendData);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
