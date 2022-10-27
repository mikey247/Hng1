const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    slackUsername: "mikey",
    backend: true,
    age: 23,
    bio: "Recent graduate,working towards becoming a backend ninja",
  });
});

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...🏃🏾‍♂️💨`);
});
