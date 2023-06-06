const { Schema, model } = require('mongoose') ;


const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
});

const Task = model('Task', taskSchema);

module.exports = Task;
