const db = require('../db/db')

const Question = {
  createAnswer: (answer, user_answer, question, category, user_correct, question_id, category_id, value, user_id) => {
    const sql = "INSERT INTO user_questions(answer, user_answer, question, category, user_correct, question_id, category_id, value, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)"

    return db
      .query(sql, [answer, user_answer, question, category, user_correct, question_id, category_id, value, user_id])
      .then(dbRes => dbRes.rows[0])
  },
  selectAll: () => {
    const sql = "SELECT * FROM user_questions ORDER BY value"
    return db
      .query(sql)
      .then(dbRes => dbRes.rows)
  },
  selectUserQuestions: (user_id) => {
    const sql = "SELECT * FROM user_questions WHERE user_id = $1"
    return db
      .query(sql, [user_id])
      .then(dbRes => dbRes.rows)
  },
  percentageForAll: () => {
    const sql = "SELECT COUNT(*) AS total_questions_answered, AVG(CAST(user_correct AS INTEGER)) * 100 AS percentage_correct FROM user_questions"
    return db
      .query(sql)
      .then(dbRes => dbRes.rows)
  }
}


module.exports = Question