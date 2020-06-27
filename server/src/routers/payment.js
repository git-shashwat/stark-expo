const express = require('express');
const auth = require('../middleware/auth');
const router = new express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/payment', auth, (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'inr'
    };

    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500).send({ error: stripeErr });
        } else {
            res.status(200).send({ success: stripeRes });
        }
    });
});

module.exports = router;