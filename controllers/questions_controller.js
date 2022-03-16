const express = require('express')
const createAnswer = require('../models/question')
const router = express.Router()

router.post('/', (req, res) => {
  // const
  const category = req.body.category.title
  const {answer, question, user_answer, id, category_id, value, user_id} = req.body
// upda
  console.log(req.body)
  createAnswer(answer, question, category, user_answer, id, category_id, value, user_id)
    .then(res => console.log(res))
})




/*
{id: 136040, answer: "workmen\\'s compensation", question: "Franz Kafka's day job was as a bureaucrat administ…ing this type of compensation, like for accidents", value: 1000, airdate: '2012-01-24T12:00:00.000Z', …}
airdate: "2012-01-24T12:00:00.000Z"
answer: "workmen\\'s compensation"
category: {id: 15296, title: "you'll need insurance", created_at: '2014-02-14T02:42:26.581Z', updated_at: '2014-02-14T02:42:26.581Z', clues_count: 10}
category_id: 15296
created_at: "2015-01-22T02:22:57.187Z"
game_id: 3813
id: 136040
invalid_count: null
question: "Franz Kafka's day job was as a bureaucrat administering this type of compensation, like for accidents"
updated_at: "2015-01-22T02:22:57.187Z"
userAnswer: false
value: 1000
*/

module.exports = router