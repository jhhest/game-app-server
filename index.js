const express = require("express");
const app = express();
const cors = require("cors");
const routerUser = require("./routes/user/router");
const port = process.env.PORT || 5000;

app.use(cors(), express.json(), routerUser);

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
