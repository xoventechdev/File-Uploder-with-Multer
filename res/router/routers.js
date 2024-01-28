const express = require('express');
const router = express.Router();
const FileController = require('../controller/FileController');
const MainController = require('../controller/MainController');
const Middleware = require('../middleware/CheckMiddleware');

router.post('/upload', Middleware.TestMiddleware, FileController.FileUploder);
router.get('/', Middleware.TestMiddleware, MainController.HomePage);
router.get('/getFiles', Middleware.TestMiddleware, MainController.getFiles);

module.exports = router;