const User = require('../models/user.model');
const Task = require('../models/task.model');

module.exports = {
  getTasks: async (req, res, next) => {
    try {
        const userId = req.userId;
        const tasks = await Task.find({user: userId}).populate('user');
        res.status(200).json(tasks);
    } catch (error) {
        console.log(error);
        res.status(500).json('Something went wrong');
    }
  },

  createTask: async (req, res) => {
        const { title } = req.body;
        const userId = req.userId;
        try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const newTask = await new Task({ title, user: userId }).save();

        const populatedTask = await newTask.populate('user', 'username email');

        res.status(201).json(populatedTask);
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: `Error: ${error}` });
        }
    },

  editTask: async (req, res) => {
    const id = req.params.id;
    const completed = req.body.completed;
    const userId = req.userId
    try {
        const updatedTask = await Task.findByIdAndUpdate(id, {user: userId, completed: completed }, { new: true });
            res.status(201).json(updatedTask)
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
  },

  updateTask: async (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    try {
      const updatedTask = await Task.findByIdAndUpdate(id, { title: title }, { new: true });
      res.status(201).json(updatedTask);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  deleteTask: async (req, res) => {
    const taskId = req.params.id;
    try {
      await Task.deleteOne({ _id: taskId });
      res.json('The task has been deleted');
    } catch (error) {
      res.status(501).json(`Error: ${error}`);
    }
  },

};
