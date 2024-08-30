const express = require('express');
const router = express.Router();
const { desencriptarTexto } = require('../controllers/desencriptarController');


router.post('/', desencriptarTexto);

module.exports = router;
