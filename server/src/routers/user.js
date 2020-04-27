const express = require('express');
const User = require('../models/user');
const router = new express.Router();

router.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        res.status(201).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        res.send(user);
    } catch (err) {
        res.sendStatus(400);
    }
});

router.get('/users', async (req, res) => {
    try {
        const users = await User.find({ });
        res.send(users);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.get('/users/:id', async (req, res) => {
    const reqID = req.params.id;

    try {
        const user = await User.findById(reqID);
        if (!user) {
            return res.sendStatus(404);
        }
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['displayName', 'password'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.sendStatus(400);
    }

    try {
        const user = await User.findById(req.params.id);

        updates.forEach(update => user[update] = req.body[update]);

        await user.save();

        if (!user) {
            return res.sendStatus(404);
        }

        res.status(200).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.delete('/users/:id', async (req, res) => {
    const reqID = req.params.id;

    try {
        const user = await User.findByIdAndDelete(reqID);

        if (!user) {
            return res.sendStatus(404);
        } 
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
})

module.exports = router;