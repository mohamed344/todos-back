const users = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "TasksApi";

const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // existing user check
    const existingUser = await users.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hashed passsword
    const hashedPassword = await bcrypt.hash(password, 10);

    // User Creation
    const result = await users.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    // Token Generate
    const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
    res.status(201).json({ user: result, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // existing user check
    const existingUser = await users.findOne({ email: email }).populate('tasks');
    if (existingUser) {
      // is password correct
      const isPasswordCorrect = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (isPasswordCorrect) {
        // Token Generate
        const token = jwt.sign(
          { email: existingUser.email, id: existingUser._id, username: existingUser.username },
          SECRET_KEY
        );
        res.status(201).json({
            user: existingUser,
            token: token,
            message: "You are logged in successfully",
          });
      } else {
        res.status(401).json({ message: "Email or password incorrect" });
      }
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { register, login };
