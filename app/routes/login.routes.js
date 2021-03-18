module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");
  var router = require("express").Router();

  router.post("/", tutorials.login);
  app.use('/api/login', router);
};
