const express = require("express");

const app = express();

const port = process.env.DATABASE_URL || 5000;

app.get('/test', (request, response)=> response.send("Hello world, Test endpoint"))

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
