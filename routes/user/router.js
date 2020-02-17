/**
 * TODO: Username exits.
 * TODO: EMAIL Taken.
 * https://github.com/Reinoptland/evetify-server/blob/master/src/User/router.js
 */

const { Router } = require("express");
const bcrypt = require("bcrypt");
const { toJWT } = require("../../auth/jwt");

const router = new Router();
const User = require("./model");

// find all users. Just a test.
router.get("/user", (request, response, next) =>
  User.findAll()
    .then(user => response.send(user))
    .catch(error => next(error))
);

// http :5000/user username=jan email=jan@vanhest.work password=password
// Create a users.
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

router.post("/user/login", async (request, response) => {
  const { email, password } = request.body;
  const user = await User.findOne({ where: { email: email } });
  const passwordValid = bcrypt.compareSync(password, user.password);

  if (passwordValid) {
    // TODO: const token = jwt.sign({ id: user.id }, secret, { expiresIn: "2h" });
    const token = toJWT({ id: user.id });
    return response.status(200).send({ token: token });
  }
});
module.exports = router;
