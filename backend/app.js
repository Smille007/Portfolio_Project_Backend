const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());
app.use(express.json());
const postController = require('./controllers/postController.js')



app.use('/posts', postController);



app.get("/", (req, res) => {
    res.send("Welcome to Daryna's blog");
  });
  app.get("*", (req, res) => {
    res.status(404).send("Page not found");
  });

module.exports = app;