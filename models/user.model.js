const mongoose = require('mongoose') ;
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    // tasks: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'Task',
    //     }
    // ]
})

const User = mongoose.model('User', userSchema);

module.exports = User;