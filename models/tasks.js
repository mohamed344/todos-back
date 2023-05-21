const express = require('express')
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    tasks:{
        title: { type: String, required: true }
    } 
    // completed: { 
    //     type: Boolean, 
    //     default: false 
    // },
});

const Task = mongoose.model('Task', schema);

module.exports = Task;
