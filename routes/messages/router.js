const express = require("express");

const Message = require("./model");
const Room = require("../room/model");

const { Router } = require("express");
const router = new Router();

function factory(stream) {
  console.log(`\n---\nFunction factory in /message is initiate\n---\n`);
  router.get("/test", (request, response) => {
    console.log("\n---\nTesting the /message/test route\n---\n");
    response.send("Test in /messages/test endpoint is succesfull!");
  });
  // create a new message.
  router.post("/new", async (request, response, next) => {
    try {
      console.log("\n ---\n endpoint -> /message/new \n ---\n");
      const newMessage = await Message.create({ text: request.body.text });
      response.send(newMessage);
    } catch {
      error => next(error);
    }
  });
  // Get all messages
  router.get("/", async (request, response, next) => {
    try {
      response.send(Message.findAll());
    } catch {
      error => next(error);
    }
  });
  return router;
}
//   router.post("/", async function(request, response, next) {
//       console.log("router.post in /message router")
//     try {
//       const newMessage = await Message.create(receivedMessage);
//       console.log("this is a newmessage\n", newMessage);
//       //   const channels = await Channel
//       //   .findAll({ include: [Message] })
//       const json = JSON.stringify;
//       response.send(json);
//     } catch {
//       error => next(error);
//     }
//   });

module.exports = factory;
