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

const Enum = Object.freeze({
  subtraction: "subtraction",
  addition: "addition",
  multiplication: "multiplication",
});

app.post("/calculate", (req, res) => {
  // console.log(req.body);
  const { operation_type, x, y } = req.body;

  switch (operation_type) {
    case Enum.subtraction:
      res.status(201).send({
        slackUsername: "mikey",
        result: x - y,
        operation_type,
      });
      break;

    case Enum.addition:
      res.status(201).send({
        slackUsername: "mikey",
        result: x + y,
        operation_type: operation_type,
      });
      break;

    case Enum.multiplication:
      res.status(201).send({
        slackUsername: "mikey",
        result: x * y,
        operation_type,
      });
      break;
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}...🏃🏾‍♂️💨`);
});

// if (operation_type.trim() === "subtraction") {
// res.status(200).json({
//   slackUsername: "mikey",
//   result: x - y,
//   operation_type,
// });
// }

// if (operation_type.trim() === "addition") {
// res.status(200).json({
//   slackUsername: "mikey",
//   result: x + y,
//   operation_type,
// });
// }

// if (operation_type.trim() === "multiplication") {
// res.status(200).json({
//   slackUsername: "mikey",
//   result: x * y,
//   operation_type,
// });
// }
