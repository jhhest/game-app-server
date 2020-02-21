const auth = require("../../auth/middleware");

const { Router } = require("express");

const Room = require("./model.js");

function factory(stream) {
  const router = new Router();
  console.log(`\n---\n factory in stream is initiated \n---\n`);

  // FIXME: Get all the rooms
  router.get("/", async (request, response, next) => {
    console.log(`\n---\n inside /room/ endpoint \n---\n`);
    response.send(await Room.findAll());
  });

  // Create a new room.
  router.post("/new", async (request, response, next) => {
    try {
      const { name } = request.body;
      const newRoom = await Room.create({ name });

      const action = {
        type: "room/ONE_ROOM",
        payload: newRoom
      };
      const stringAction = JSON.stringify(action);
      stream.send(stringAction);
      response.json(newRoom);
    } catch (error) {
      next(error);
    }
  });

  router.post("/join", async (req, res, next) => {
    const {
      user,
      body: { roomId }
    } = req;
    const room = await Room.findByPk(roomId);
    let locked = room.locked;
    if (!locked) {
      locked = room.players === 1;
      await room.update({ players: room.players + 1, locked });
      const updatedUser = await user.update({ roomId: roomId });
      if (locked) await Game.create({ roomId });

      const updateRoom = JSON.stringify({
        type: "room/UPDATE",
        payload: {
          id: roomId,
          players: room.players,
          locked
        }
      });
      stream.send(updateRoom);

      res.json(updatedUser);
    } else {
      res.status(400).send("Room full");
    }
  });

  return router;
}

// TODO: assign user to a room.

module.exports = factory;
