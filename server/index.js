const express = require("express");
const cors = require("cors");
const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());

const usernames = ["string one", "string two"];

app.get("/", (req, res) => {
  res.send("<h1>Larger Text</h1>");
});

app.get("/user/:id", (req, res) => {
  console.log(req.params.id);
  if (usernames.includes(req.params.id)) {
    console.log("Success!");
    res.send("Success!");
  } else {
    res.status(404).send("Failure");
    console.log("Failure!");
  }
});

app.post("/users", (req, res) => {
  console.log(req.body);
  usernames.push(req.body.username);
  res.send("success!");
});

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

function shutDown() {
  console.log("recieved K I L L S I G N A L shutting down gracefully");
  server.close(() => {
    console.log("closed out remaining functions");
    process.exit(0);
  });

  setTimeout(() => {
    console.error(
      "experiencing an error, things have not closed. Forcefully closing. Whoops"
    );
    process.exit(1);
  }, 10000);
}

process.on("SIGTERM", shutDown);
process.on("SIGINT", shutDown);
