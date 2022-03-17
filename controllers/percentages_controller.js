const express = require('express')
const Question = require('../models/question')
const router = express.Router()

router.get('/', (req, res) => {
    Question
    .percentageForAll()
    .then(data => res.json(data))
  })

module.exports = router
