const express = require("express");
const app = express();
const routerUser = require('./routes/user/router')

const port = process.env.DATABASE_URL || 5000;

app.use(routerUser);

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
