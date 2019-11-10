// ===============================================================================
// DEPENDENCIES
// ===============================================================================
var path = require("path");
// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function(app) {
  // HTML GET Requests
  // ---------------------------------------------------------------------------
// survey.html get api
app.get("/survey", function(req, res) {
  //  console.log("inside get /survey");
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

 // home.html get api
  app.get("/home", function(req, res) {
    //  console.log("inside get /home");
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
// catch all if /home or /survey not requested
  app.get("", function(req, res) {
    //  console.log("inside get /home");
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
