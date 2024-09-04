const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const userRouter = require("./route/userRoute");
const urlRouter = require("./route/urlRoute");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", async (req, res) => {
  res.status(200).send("Welcome to Gurucool");
});

app.use("/user", userRouter);
app.use("/", urlRouter);

const PORT = process.env.PORT || 8080;

connectDB();

app.listen(PORT, (req, res) => {
  console.log(`server started at port number http://localhost:${PORT}`);
});
