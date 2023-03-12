const express = require("express");
const cors = require("cors");
const app = express();
const { create, all } = require("mathjs");

app.use(cors());
app.use(express.json());
const math = create(all, {});

const PORT = process.env.PORT || 5000;

app.post("/api/calculate", (req, res) => {
  const target = req.body.toSumUp;
  const targetArray = target.split(" ");
  if (
    !isNaN(targetArray[0]) &&
    Number.isInteger(parseFloat(targetArray[0])) &&
    !isNaN(targetArray[2]) &&
    Number.isInteger(parseFloat(targetArray[2])) &&
    targetArray[1] === "+" &&
    targetArray.length === 3
  ) {
    res.send({
      status: "Good",
      question: target,
      answer: math.evaluate(target),
    });
  } else {
    res.send({
      status: "Error",
      question: target,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
