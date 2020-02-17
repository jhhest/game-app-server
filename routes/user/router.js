const { Router } = require("express");
const bcrypt = require("bcrypt");

const router = new Router();

const User = require("./model");

router.get("/user", (request, response, next) =>
  User.findAll()
    .then(user => response.send(user)) //  TODO: Do do we need user.json?
    .catch(error => next(error))
);

// http :5000/user username=jan email=jan@vanhest.work password=password
router.post("/user", (request, response, next) => {
  const { username, email, password } = request.body;
  User.create({
    username: username,
    email: email,
    password: bcrypt.hashSync(password, 10)
  })
    .then(user => response.send(user))
    .catch(error => next(error));
});
module.exports = router;
