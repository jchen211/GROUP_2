var db = require("../models");

module.exports = function(app) {
  // Get all times
  app.get("/api/times", function(req, res) {
    db.Time.findAll({}).then(function(userTimes) {
      res.json(userTimes);
    });
  });

  // Create a new time
  app.post("/api/times", function(req, res) {
    db.Time.create(req.body).then(function(userTimes) {
      res.json(userTimes);
    });
  });

  //delete a time
  app.delete("/api/times/:id", function(req, res) {
    db.Time.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(userTimes) {
      res.json(userTimes);
    });
  });
};