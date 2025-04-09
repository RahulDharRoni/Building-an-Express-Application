const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mainRoutes = require("./routes/mainRoutes");
const logger = require("./middleware/logger");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);

app.use("/", mainRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
