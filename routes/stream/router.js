const Sse = require("json-sse");
const { Router } = require("express");
const Room = require("../room/model");
const Message = require("../messages/model");

const router = new Router();
const stream = new Sse();

// get on the stream
router.get("/", async (request, response, next) => {
  console.log(`/n---/n We are on the stream route! /n---/n`);
  try {
    const allRooms = await Room.findAll();
    const actionALL_ROOMS = {
      type: "room/ALL_ROOMS",
      payload: allRooms
    };
    
    
    const allRoomsStringified = JSON.stringify(actionALL_ROOMS);
    
    console.log(
      `
----------------------------
JSON with stringified action
allMessagesStringified:
allroomsstringiefied. 
${allRoomsStringified}
----------------------------
`
    );
    stream.init(request, response);
    stream.updateInit(allRoomsStringified);
  } catch (error) {
    next(error);
  }
});

module.exports = { streamRouter: router, stream };
