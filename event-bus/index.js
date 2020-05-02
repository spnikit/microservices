const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:6001/events", event); // comments service
  axios.post("http://localhost:4000/events", event); // posts service
  axios.post("http://localhost:6002/events", event); // ?uknown? service

  res.send({ status: "OK" });
});

app.listen(4005, () => console.log("Server is listening on PORT 4005"));
