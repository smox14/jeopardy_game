const express = require('express')
const Question = require('../models/question')
const router = express.Router()

router.post('/', (req, res) => {
  // const
  const category = req.body.category.title
  const {answer, question, user_answer, id, category_id, value, user_id} = req.body
// upda
  console.log(req.body)
  Question
  .createAnswer(answer, question, category, user_answer, id, category_id, value, user_id)
    .then(res => console.log(res))
})

router.get('/', (req, res) => {
  
  Question
  .selectAll()
  .then(data => res.json(data))
})

module.exports = router