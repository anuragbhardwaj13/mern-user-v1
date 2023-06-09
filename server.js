require("dotenv").config();
const express = require("express");
const connectDb = require("./config/db.js");
const cors = require("cors");
const path = require("path");
const app = express();

const user = require("./routes/user.js");

app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
connectDb();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.get("/", (req, res) => {
  res.send(`server is connected at port ${port}`);
});
app.use("/api/user", user);
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("server is connected");
});
