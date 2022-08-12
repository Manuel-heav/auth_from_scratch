const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "It's working",
  });
});

router.post("/signup", (req, res) => {
  res.json({
    message: "Auth",
  });
});

module.exports = router;
