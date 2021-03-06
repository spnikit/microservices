const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  axios.post("http://comments-srv:6001/events", event); // comments service
  axios.post("http://posts-clusterip-srv:4000/events", event); // posts service
  axios.post("http://query-srv:6002/events", event); // query service
  axios.post("http://moderation-srv:4003/events", event); // moderation service

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => console.log("Server is listening on PORT 4005"));
