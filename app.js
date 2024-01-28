const express = require('express');
const router = require('./res/router/routers');

const app = new express();

app.use('/', router);

module.exports = app;
