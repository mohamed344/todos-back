const User = require('../models/user.model');
const Task = require('../models/task.model');

module.exports = {
  getAllTasks: async (req, res, next) => {
    try {
      const tasks = await Task.find({}).populate('user');
    //   const populatedTask = await tasks.populate('user', 'username email');
      res.status(200).json(tasks);
    } catch (error) {
      console.log(error);
      res.status(500).json('Something went wrong');
    }
  },

  createTask: async (req, res) => {
        const { title, userId } = req.body;
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

  showTask: async (req, res) => {
    const taskId = req.params.id;

    try {
        // const user = await User.findById(userId);
        // if (!user) {
        //     return res.status(404).json({ error: 'User not found' });
        // }
        const task = await Task.findById(taskId);
        // const populatedTask = await task.populate('user', 'username email');
        if(task) res.status(201).json(task);
    } catch (error) {
      console.log(error);
      res.status(500).json(`Error: ${error}`);
    }
  },

  editTask: async (req, res) => {
    const id = req.params.id;
    const completed = req.body.completed;
    try {
      const updatedTask = await Task.findByIdAndUpdate(id, { completed: completed }, { new: true });
      res.status(201).json(updatedTask);
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

  getTasks: async (req, res) => {
    const username = req.params.username;

    const foundUser = await User.find({username: username}).populate("tasks");
    res.json(foundUser);
  }
};
