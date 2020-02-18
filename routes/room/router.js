const { Router } = require("express");
const auth = require("../../auth/middleware");
const router = new Router();
const Room = require("./model.js");

// FIXME: Get all the rooms
router.get("/room", async (request, response) => await response.send(Room.findAll()));// FIXME: check if async await is working. 

// Create a new room. 
router.post("/room/new", auth, async (request, response) => {
  const { name } = request.body;
  response.send(await Room.create({name: name}));
});

// TODO: assigning an user to a room. 

module.exports = router;
