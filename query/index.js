const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");

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

  const eventType = type.trim().toLowerCase();
  switch (eventType) {
    case "postcreated": {
      const { id, title } = data;
      posts[id] = { id, title, comments: [] };
      break;
    }

    case "commentcreated": {
      const { id, content, postId } = data;
      posts[postId].comments.push({ id, content });
      break;
    }

    default: {
      console.log("Query service: There is no such event type", eventType);
      res.status(400).send({});
      break;
    }
  }

  res.send({});
});

// ******** SERVER FIRE UP *********
app.listen(6002, () => console.log("Server is listening on PORT 6002"));
