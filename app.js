const express = require('express');
const router = require('./res/router/routers');

const app = new express();

app.use('/', router);
app.use('/res/upload', express.static('res/upload'));

module.exports = app;
