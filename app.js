const express = require("express");
const path = require("path");

const indexRouter = require("./routes/indexRouter");

const app = express();

// Parse form data
app.use(express.urlencoded({ extended: true }));

// EJS setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes
app.use("/", indexRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
