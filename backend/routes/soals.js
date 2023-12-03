const express = require('express');
const { getSoal, postSoals, getSoals, deleteSoal, updateSoal } = require('../controller/soalController');

const router = express.Router();

router.get('/', getSoals)

router.get('/:id', getSoal)

router.post('/', postSoals)

router.delete('/:id', deleteSoal)

router.patch('/:id', updateSoal)

module.exports = router