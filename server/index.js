const express = require('express');
const cors = require('cors');
const path = require('path');
require('./src/db/mongoose');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const userRouter = require('./src/routers/user');
const paymentRouter = require('./src/routers/payment');
const collectionRouter = require('./src/routers/collection');

const app = express();
const port = process.env.PORT || 5000;

// Maintainence mode
// app.use((req, res, next) => {
//     res.sendStatus(503);
// })

app.use(cors());
app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(userRouter);
app.use(paymentRouter);
app.use(collectionRouter);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});


app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});