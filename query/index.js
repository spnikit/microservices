const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

// ******** SERVER AND MIDDLEWARE SETUP *********
app.use(bodyParser.json());
app.use(cors());

// ******** DATA *********
const posts = {};

// ******** ROUTES *********
app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  handleEvent(type, data);

  res.send({});
});

// ******** SERVER FIRE UP *********
app.listen(6002, async () => {
  console.log("Server is listening on PORT 6002");

  const resp = await axios.get("http://event-bus-srv:4005/events");

  for (const { type, data } of resp.data) {
    console.log("Processing event", type);
    handleEvent(type, data);
  }
});

// ******** HELPER FUNCTIONS *********

function handleEvent(type, data) {
  const eventType = type.trim().toLowerCase();
  switch (eventType) {
    case "postcreated": {
      const { id, title } = data;
      posts[id] = { id, title, comments: [] };
      break;
    }
    case "commentcreated": {
      const { id, content, postId, status } = data;
      posts[postId].comments.push({ id, content, status });
      break;
    }
    case "commentupdated": {
      const { postId, id, content, status } = data;
      const comments = posts[postId].comments;
      const comment = comments.find((comment) => comment.id === id);
      comment.status = status;
      comment.content = content;
      break;
    }
  }
}
