const express = require('express');
const cors = require('cors');
require('./src/db/mongoose');
const userRouter = require('./src/routers/user');
const collectionRouter = require('./src/routers/collection');

const app = express();
const port = process.env.PORT || 3001;

// Maintainence mode
// app.use((req, res, next) => {
//     res.sendStatus(503);
// })

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(collectionRouter);

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});