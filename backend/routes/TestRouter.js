const express = require('express');
const { TestComponent } = require('../controllers/TestComponent');
const testRouter = express.Router();
testRouter.route('/test').get(TestComponent);
module.exports = testRouter