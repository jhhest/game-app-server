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
    .then(user => response.send(eeuser))
    .catch(error => next(error))
);

// http :5000/user username=jan email=jan@vanhest.work password=password
// Create a user
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

// login
router.post("/user/login", async (request, response, next) => {
  const { email, password } = request.body;
  if (!email || !password) {
    return response.status(400).send("Missing email or password.");
  }

  try {
    const user = await User.findOne({ where: { email: email } });
    const passwordValid = bcrypt.compareSync(password, user.password);

    if (passwordValid) {
      // TODO: const token = jwt.sign({ id: user.id }, secret, { expiresIn: "2h" });
      const { username, email } = user.dataValues;
      console.log(user);
      const token = toJWT({ id: user.id });
      return response.status(200).send({
        username: username,
        email: email,
        token: token
      });
    } else {
      return response
        .status(401)
        .send({ message: "Email or password is invalid" });
    }
  } catch (error) {
    console.log("error.name", error);
    switch (error.name) {
      case "TypeError":
        return response
          .status(400)
          .send({ message: "Email or password is not valid" });
      default:
        return response.status(400).send({ message: "Unknow error" });
    }
  }
});

module.exports = router;
