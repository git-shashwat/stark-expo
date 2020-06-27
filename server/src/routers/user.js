const express = require('express');
const User = require('../models/user');
const auth = require('../middleware/auth');
const router = new express.Router();

router.post('/users/signup', async (req, res) => {
    res.send(req.body);
    // const user = new User(req.body);

    // try {
    //     await user.save();
    //     const token = await user.generateAuthToken();
    //     res.status(201).send({ user, token });
    // } catch (err) {
    //     res.status(400).send(err);
    // }
});

router.post('/users/signin', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();
        res.send({ user, token });
    } catch (err) {
        res.sendStatus(400);
    }
});

router.post('/users/signout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => {
            return token.token !== req.token
        });
        await req.user.save();

        res.sendStatus(200);
    } catch (err) {
        req.sendStatus(500);
    }
});

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user);
});

router.patch('/users/me', auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['displayName', 'password'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.sendStatus(400);
    }

    try {
        const user = req.user;
        updates.forEach(update => user[update] = req.body[update]);
        await user.save();

        res.status(200).send(user);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.delete('/users/me', auth, async (req, res) => {
    try {
        await req.user.remove(); 
        res.send(req.user);
    } catch (err) {
        res.status(500).send(err);
    }
})

module.exports = router;