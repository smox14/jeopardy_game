
// function checkAnswer() {
//   if document.querySelector
// }
const db = require('../db/db')
  
function createAnswer(answer, question, category, user_answer, question_id, category_id, value, user_id) {
  const sql = "INSERT INTO user_questions(answer, question, category, user_answer, question_id, category_id, value, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)"

  return db 
    .query(sql, [answer, question, category, user_answer, question_id, category_id, value, user_id])
    .then(dbRes => dbRes.rows[0])
}

module.exports = createAnswer