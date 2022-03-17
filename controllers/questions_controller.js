const express = require('express')
const Question = require('../models/question')
const router = express.Router()

router.post('/', (req, res) => {
  // const
  const category = req.body.category.title
  const {answer, user_answer, question, user_correct, id, category_id, value, user_id} = req.body
// upda
  console.log(req.body)
  Question
  .createAnswer(answer, user_answer, question, category, user_correct, id, category_id, value, user_id)
    .then(res => console.log(res))
})

router.get('/', (req, res) => {
  
  Question
  .selectAll()
  .then(data => res.json(data))
})

router.get('/:user_id', (req, res) => {
  const user_id = req.params.user_id
  Question
  .selectUserQuestions(user_id)
  .then(data => res.json(data))
})

module.exports = router