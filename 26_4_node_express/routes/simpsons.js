const express = require('express');
const rescue = require('express-rescue');
const router = express.Router();
const { getSimpsons, postSimpsons, getSimpsonsId } = require('../middlewares');

router.get('/', rescue(getSimpsons));

router.post('/', rescue(postSimpsons));

router.get('/:id', rescue(getSimpsonsId));

module.exports = router;
