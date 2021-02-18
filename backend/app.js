const express = require('express');
const app = express();

const productRoute = require('./routes/ProductRouter');
const testRouter = require('./routes/TestRouter');


app.use(express.json());
//Import all routes --This productRoute can be any name, we just named it for understanding purposes.
app.use('/api/v1',productRoute);
app.use('/api/v1',testRouter);

module.exports = app