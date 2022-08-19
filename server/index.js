const express = require("express");
const morgan = require("morgan");
const auth = require("./auth/index.js");
// const cors = require("cors")

const app = express();

app.use(morgan("common"));
app.use(cors())

app.get("/", (req, res) => {
  res.json({
    message: "Hello",
  });
});

app.use("/auth", auth);
function notFound(req, res, next) {
  res.status(404);
  const error = new Error("Not found" + req.originalUrl);
  next(error);
}

function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: err.stack,
  });
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening to ${port}`);
});
