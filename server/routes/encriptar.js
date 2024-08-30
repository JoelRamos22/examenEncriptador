const express = require('express');
const router = express.Router();
const { encriptarTexto } = require('../controllers/encriptarController');

router.post('/', encriptarTexto);

module.exports = router;
