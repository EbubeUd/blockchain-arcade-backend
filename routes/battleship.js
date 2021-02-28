const express = require('express');
const router = express.Router();
const { getPlayer, createNewPlayer } = require('../controller/battleship');

router.route('/:id').get(getPlayer)
router.route('/').post(createNewPlayer)

module.exports = router;