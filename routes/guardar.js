const express = require('express');
const router = express.Router();
const guardarController = require('../controllers/guardarController');

router.post('/guardar', guardarController.guardar);

module.exports = router; 