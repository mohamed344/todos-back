const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const taskRouter = require('./routes/taskRouter');
const userRoute = require('./routes/userRouter');

const port = 5000;
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/todolist", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/tasks", taskRouter);
app.use("/api/users", userRoute);

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("HTTP Method - " + req.method + " , URL - " + req.url);
  next();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
