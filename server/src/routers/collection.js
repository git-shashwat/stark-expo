const express = require('express');
const auth = require('../middleware/auth');
const Collection = require('../models/collection');
const router = new express.Router();

router.post('/collections', async (req, res) => {
    const collectionIDArr = Object.keys(req.body);
    const collections = collectionIDArr.map(id => (
        new Collection({ 
            title: req.body[id].title,
            items: req.body[id].items
        })
    ));

    try {
        await Collection.insertMany(collections);
        res.status(201).send(collections);
    }
    catch (e) {
        res.sendStatus(400);
    }
});

router.get('/collections', auth, (req, res) => {
    Collection.find({})
    .then((collections) => {
        res.send(collections);
    })
    .catch(e => res.sendStatus(404));
})

module.exports = router;