const Task = require('../models/Task')
const getAllTasks =(req,res) => {
    res.json(req.body)
}

const getOneTask = (req,res) => {
    res.json({id:req.params.id})
}
const createTask = (req,res) => {
    res.send('createTask TASK!')
}
const deleteTask = (req,res) => {
    res.send('DElETE SiNGULAR TASK!')
}
const updateTask = (req,res) => {
    res.send('UPDATE SiNGULAR TASK!')
}

module.exports = {
    getAllTasks,
    getOneTask,
    createTask,
    deleteTask,
    updateTask
}