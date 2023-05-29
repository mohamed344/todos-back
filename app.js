const express = require('express');
const app = express();
const port = 5000;
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRouter = require('./routes/taskRouter');
const userRouter = require('./routes/userRouter');
app.use(express.json());

const Task = require('./models/tasks');

app.use('/api/tasks', taskRouter);
app.use('/api/users', userRouter);


app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.use((req, res, next) =>)

mongoose.connect('mongodb://127.0.0.1:27017/todolist', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

