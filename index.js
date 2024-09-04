const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", async (req, res) => {
  res.status(200).send("Welcome to Gurucool");
});
const PORT = process.env.PORT || 8080;

app.listen(PORT, (req, res) => {
  console.log(`server started at port number http://localhost:${PORT}`);
});
