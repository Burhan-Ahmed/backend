const express = require('express');
const router = express.Router();
const seeRoom = require('../controller/ViewRoom.controller')

router.get('/ViewRoom', seeRoom);


module.exports = router;