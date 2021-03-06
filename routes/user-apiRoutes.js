var db = require("../models");

module.exports = function(app) {
  // Get all users
  app.get("/api/users/all", function(req, res) {
    db.Users.findAll({}).then(function(userInfo) {
      res.json(userInfo);
    });
  });

  // Create a new user
  app.post("/api/users", function(req, res) {
    // console.log(req.body);
    db.Users.create({
        userName: req.body.userName,
        userPassword: req.body.userPassword,
        userPhone: req.body.userPhone,
        userEmail: req.body.userEmail,
        userCC: req.body.userCC
    })
      .then(function(userInfo) {
        res.json(userInfo);
    })
    .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
        res.json(err);
      });
  });

// atmpt login ==========================
  // app.get("/api/users", function(req, res) {
  //   db.Users.findOne({
  //     where: { 
  //       userEmail: req.body.userEmail,
  //       userPassword: req.body.userPassword
  //     }
  //     .then(function(){
  //         res.redirect("./public/search");
  //     })
  //   })
  // })
// ======================================

};
