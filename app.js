const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017/todolist', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Task = require('./models/tasks');
app.use('/api/tasks', require('./routes/index'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
