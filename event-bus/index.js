const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  const event = req.body;

  await axios.post("http://localhost:6001/events", event); // comments service
  await axios.post("http://localhost:4000/events", event); // posts service
  await axios.post("http://localhost:6002/events", event); // query service
  await axios.post("http://localhost:4003/events", event); // moderation service

  res.send({ status: "OK" });
});

app.listen(4005, () => console.log("Server is listening on PORT 4005"));
