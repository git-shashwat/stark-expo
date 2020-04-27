const express = require('express');
const Task = require('../models/task');
const router = new express.Router();

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body);

    try {
        await task.save();
        res.status(201).send(task);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({ });
        res.send(tasks);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.get('/tasks/:id', async (req, res) => {
    const reqID = req.params.id;

    try {
        const task = await Task.findById(reqID);
        if (!task) {
            return res.sendStatus(404);
        }
        res.send(task);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.delete('/tasks/:id', async (req, res) => {
    const reqID = req.params.id;

    try {
        const task = await Task.findByIdAndDelete(reqID);
        if (!task) {
            return res.sendStatus(404);
        }
        res.send(task);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;