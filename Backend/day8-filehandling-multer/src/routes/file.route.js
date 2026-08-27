const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  try {
    let body = req.body;
    console.log(body);
    res.status(200).json({
      message: "file recieved successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

module.exports = router;
