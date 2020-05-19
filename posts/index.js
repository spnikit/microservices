const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");

// ******** SERVER AND MIDDLEWARE SETUP *********
const PORT = process.env.PORT || 6000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

// ******** DATA *********
const posts = {};

// ******** ROUTES *********
app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;
  posts[id] = { id, title };

  await axios.post("http://event-bus-srv:4005/events", {
    type: "PostCreated",
    data: {
      id,
      title,
    },
  });

  res.status(201).send(posts[id]);
});

app.post("/events", (req, res) => {
  console.log("Post Service: Event Received", req.body.type);

  res.send({});
});

// ******** SERVER FIRE UP *********
app.listen(PORT, () => {
  console.log("V20");
  console.log(`Listening on port ${PORT}`);
});
