const express = require('express')
const Treasure = require('../models/question')

const router = express.Router()

router.get('/', (req, res) => {
  Quiz
    .findQuestion()
    .then(question => res.json(question))
})

module.exports = router