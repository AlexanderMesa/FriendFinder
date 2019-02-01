//Basic route that sends the user first to the home page
var express = require("express");
var path = require("path");

function homePage(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
}

function surveyPage(app) {
  app.get("/survey.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
}

module.exports = {
  homePage,
  surveyPage
};
