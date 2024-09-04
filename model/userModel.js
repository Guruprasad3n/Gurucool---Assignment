const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
  },
});

const userModel = model("User", userSchema)
module.exports = userModel