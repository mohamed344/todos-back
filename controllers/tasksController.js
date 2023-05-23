const Task = require('../models/tasks');

module.exports = {
    index: async (req, res) => {
      try {
        const tasks = await Task.find({});
        res.json(tasks);
      }catch (error) {
        console.log(error);
        res.status(500).json('Something went wrong');
      }
    }, 

    create: async (req, res) => {
        const { title } = req.body;
        try {
          const newTask = await Task({ title }).save();
          res.json(newTask);
        } catch (error) {
          console.log(error);
          res.status(500).json(`Error: ${error}`);
        }
    },
    show: async (req, res) => {
        const taskId = req.params.id;
        try{
            await Task.findById(taskId).then((task) => {
                res.json(task)
            })
        }catch (error){
            console.log(error);
            res.status(500).json(`Error: ${error}`);
        }
    },

    edit: async (req, res) => {
        const taskId = req.params.id;
        try{
            await Task.findById(taskId).then((task) => {
                res.json(task)
            })
        }catch (error){
            console.log(error);
            res.status(500).json(`Error: ${error}`);
        }
    }, 

    update: async (req, res) =>{
        const id = req.params.id;
        const {title} = req.body;
        try{
            const newTask = await Task.findByIdAndUpdate(id, {title: title});
            res.json(newTask);
        }catch (error) {
            res.status(500).json(`Error: ${error}`)
        }
    }, 

    delete: async (req, res) => {
        const taskId = req.params.id;

        try{
            await Task.deleteOne({ _id: taskId });
            res.json('The task has been deleted');
        }catch (error) {
            res.status(501).json(`Error: ${error}`)
        }
    }
  };