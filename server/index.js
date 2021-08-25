const { v4: uuid } = require("uuid");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3002;

const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(cors());
app.use(express.json());

const cookieConfig = {
  maxAge: 60 * 60 * 1000,
  httpOnly: false,
  secure: false,
  sameSite: false,
};

function omit(obj, ...omitNames) {
  const obscuredObject = { ...obj };
  omitNames.forEach((name) => {
    delete obscuredObject[name];
  });

  return obscuredObject;
}

const users = [
  { name: "Tammas", email: "Tamhicks@yahoo.com", password: "Nope!" },
];

app.get("/", (req, res) => {
  res
    .cookie("nameOfOurCookieMonster", "theCookieValue", cookieConfig)
    .send("<h1>Larger Text</h1>");
});

app.get("/auth/user/:id", (req, res) => {
  console.log(req.params.id);
  if (usernames.includes(req.params.id)) {
    console.log("Success!");
    res.send("Success!");
  } else {
    res.status(404).send("Failure");
    console.log("Failure!");
  }
});

app.post("/auth/users", (req, res) => {
  console.log(req.body);
  if (users.find((user) => user.email === req.body.email)) {
    console.warn("ERROR! ERROR! ERROR!");
    res.status(409).send();
  } else {
    users.push(req.body);
    res.status(201).send();
  }
  console.log(users);
});

app.put("/auth/user", (req, res) => {
  console.log(req.body);
  const specUser = users.find((user) => user.email === req.body.email);
  if (!specUser) {
    res.status(404).send("That user does not exist");
    return;
  }
  if (req.body.action !== "login") {
    res.status(404).send("We haven't handled that yet");
    return;
  }
  if (specUser.sessionID) {
    res
      .status(200)
      .cookie("nameOfOurCookieMonster", specUser.sessionID, cookieConfig)
      .send(omit(specUser, "password"));
    console.log("Spec user sessionID: ", specUser.sessionID);
    return;
  }
  const sessionID = uuid();
  specUser.sessionID = sessionID;
  console.log(specUser);
  res
    .cookie("nameOfOurCookieMonster", sessionID, cookieConfig)
    .send("<h1>Larger Text</h1>");
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
