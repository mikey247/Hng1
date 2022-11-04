const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

// app.get("/", (req, res) => {
//   res.status(200).json({
//     slackUsername: "mikey",
//     backend: true,
//     age: 23,
//     bio: "Recent graduate,working towards becoming a backend ninja",
//   });
// });

const Enum = Object.freeze({
  subtraction: "subtraction",
  addition: "addition",
  multiplication: "multiplication",
});

app.post("/", (req, res) => {
  const { x, y, operation_type } = req.body;
  const operation_types = ["addition", "subtraction", "multiplication"];
  if (!operation_types.includes(operation_type)) {
    return res
      .status(400)
      .json({ message: "Invalid operation type provided." });
  }
  let result;
  switch (operation_type) {
    case "addition":
      result = x + y;
      break;
    case "subtraction":
      result = x - y;
      break;
    case "multiplication":
      result = x * y;
      break;
    default:
      break;
  }

  if (!result) {
    return res
      .status(400)
      .json({ message: "Can't proceed with request because input is empty." });
  } else {
    return res
      .status(200)
      .json({ slackUsername: "mikey", operation_type, result });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}...🏃🏾‍♂️💨`);
});

// const { operation_type, x, y } = req.body;

//   if (operation_type.trim() === "subtraction") {
//     res.status(200).json({
//       slackUsername: "mikey",
//       result: x - y,
//       operation_type,
//     });
//   }

//   if (operation_type.trim() === "addition") {
//     res.status(200).json({
//       slackUsername: "mikey",
//       result: x + y,
//       operation_type,
//     });
//   }

//   if (operation_type.trim() === "multiplication") {
//     res.status(200).json({
//       slackUsername: "mikey",
//       result: x * y,
//       operation_type,
//     });
//   }

// switch (operation_type) {
//   case Enum.subtraction:
//     res.status(200).send({
//       slackUsername: "mikey",
//       result: x - y,
//       operation_type,
//     });
//     break;

//   case Enum.addition:
//     res.status(200).send({
//       slackUsername: "mikey",
//       result: x + y,
//       operation_type: operation_type,
//     });
//     break;

//   case Enum.multiplication:
//     res.status(200).send({
//       slackUsername: "mikey",
//       result: x * y,
//       operation_type,
//     });
//     break;
// }
