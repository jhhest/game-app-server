const { Router } = require("express");
const router = new Router();

const User = require("./model");

router.get("/user", (request, response, next) =>
  User.findAll()
    .then(user => response.send(user)) //  TODO: Do do we need user.json?
    .catch(error => next(error))
);

// http :5000/user username=jan email=jan@vanhest.work password=password
router.post("/user", (request, response, next) => {
  // console.log("request body", request.body)
  console.log(
    `
    ----------
    request = 
    ----------
    ${request}/n`,
    request.body
  );
  User.create(request.body)
    .then(user => response.send(user))
    .catch(error => next(error));
});
module.exports = router;
