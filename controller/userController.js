const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userModel = require("../model/userModel");

const register = async (req, res) => {
  const { name, username, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ username });
    if (existingUser) {
      return res.status(209).send({ message: "User Already Exist" });
    }
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password, saltRound);

    const newUser = new userModel({ name, username, password: hashedPassword });

    await newUser.save();
    let token = jwt.sign(
      { user: { id: newUser._id } },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    return res
      .status(200)
      .send({ message: "Registration Successful", newUser, token });
  } catch (error) {
    console.error("Error during registration:", error);
    return res
      .status(500)
      .send({ message: "Something Went Wrong While registering" });
  }
};
const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.findOne({ username });
    if (!user) {
      return res.status(404).send({ message: "User Not Found" });
    }

    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return res.status(403).send({ message: "Invalid User I'd or Password" });
    }
    let token = jwt.sign({ user: { id: user._id } }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return res.status(200).send({
      message: "Login Successful",
      user: {
        id: user._id,
        name: user.name,
        username: user.username,
      },
      token,
    });
  } catch (error) {
    console.error("Error during login:", error);
    return res
      .status(500)
      .send({ message: "Something Went Wrong While Login" });
  }
};

module.exports = { register, login };
