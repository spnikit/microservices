const app = require("express")();
const bodyParser = require("body-parser");
const axios = require("axios");

// ******** SERVER AND MIDDLEWARE SETUP *********
app.use(bodyParser.json());

// ******** ROUTES *********
app.post("/events", async (req, res) => {
  const { type, data } = req.body;

  if (type === "CommentCreated") {
    const status = data.content.includes("orange") ? "rejected" : "approved";

    await axios.post("http://localhost:4005/events", {
      type: "CommentModerated",
      data: {
        ...data,
        status,
      },
    });
  }
  res.send({});
});

// ******** SERVER FIRE UP *********
app.listen(4003, () => console.log("Server is listening on PORT 4003"));
