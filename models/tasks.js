const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    }
});

const Task = mongoose.model('Task', schema);

module.exports = Task;
