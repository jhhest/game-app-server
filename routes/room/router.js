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

  return router;
  //     const stringAction = JSON.stringify(action);
  //     stream.send(stringAction);
  //     res.json(newRoom);
  //   } catch (e) {
  //     next(e);
  //   }
  // });
}

// TODO: assign user to a room.

module.exports = factory;
