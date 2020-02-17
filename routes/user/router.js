const { Router } = require("express");

const router = new Router();

const User = require("./model");

router.get("/user", (request, response) =>
  User.findAll()
  .then( user=> response.send(user)) //  TODO: Do do we need user.json? 
  .catch(error => next(error))
);
module.exports = router;
