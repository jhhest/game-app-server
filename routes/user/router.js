const { Router } = require("express");

const router = new Router();

const User = require("./model");

router.get("/user", (request, response) =>
  response.send("This is the user endpoint! ")
);
module.exports = router;
