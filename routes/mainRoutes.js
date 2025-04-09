const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.post("/submit", (req, res) => {
  console.log(req.body); // Logs form data
  res.send("Form submission successful!");
});

// Route with a parameter
router.get("/user/:name", (req, res) => {
  res.send(`Hello, ${req.params.name}`);
});

// Image download route
router.get("/download", (req, res) => {
  res.download("./public/img/sample.jpg");
});

module.exports = router;
