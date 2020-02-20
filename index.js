const express = require("express");
const app = express();
const cors = require("cors");
const Sse = require("json-sse");

const routerAuth = require("./auth/router");
const routerUser = require("./routes/user/router");
const routerRoom = require("./routes/room/router");
const routerMessage = require("./routes/messages/router");
const { streamRouter, stream } = require("./routes/stream/router");


app.use(cors(), express.json(), routerAuth, routerUser);
app.use("/stream", streamRouter);
app.use("/room", routerRoom(stream));


const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`
--------------------------------
Game server listens to ${port}
--------------------------------
`)
);

// Setup server (index.js)
// Folder structure
// Connect to db / sync
// Setup Cors
// Test endpoint
