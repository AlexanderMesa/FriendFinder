//Basic route that sends the user first to the home page
var express = require("express");

// Route that sends the user first to the api page
function apiRoute(app, friendData) {
  app.get("/api/friends", function(req, res) {
    return res.json(friendData);
  });
}
function apiPost(app, friendData) {
  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    friendData.push(newFriend);

    //calculates all the differences
    var differences = [];
    for (var i = 0; i < friendData.length - 1; i++) {
      differences[i] = 0;
      for (var j = 0; j < 10; j++) {
        differences[i] =
          differences[i] +
          parseInt(Math.abs(newFriend.scores[j] - friendData[i].scores[j]));
      }
    }
    //Get position of lowest difference
    var index = 0;
    var lowestDifference = differences[0];
    for (var i = 0; i < differences.length; i++) {
      if (differences[i] < lowestDifference) {
        lowestDifference = differences[i];
        index = i;
      }
    }

    var bestFriendName = friendData[index].name;
    var bestFriendPic = friendData[index].photo;

    res.json({
      name: bestFriendName,
      photo: bestFriendPic
    });
    //res.end();
  });
}

module.exports = {
  apiRoute,
  apiPost
};
