const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");

// ******** SERVER AND MIDDLEWARE SETUP *********
app.use(bodyParser.json());
app.use(cors());

// ******** ROUTES *********
app.get("/posts", (req, res) => {});

app.post("/events", (req, res) => {});

// ******** SERVER FIRE UP *********
app.listen(6002, () => console.log("Server is listening on PORT 6002"));
