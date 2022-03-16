function checkAnswer() {
  const user_answer = document.querySelector('.user_input').toUpperCase()
  const question_answer = document.querySelector('.question_answer').toUpperCase()
  if (user_answer == question_answer) {
    return console.log('answer was correct')
  }
  return console.log('answer was wrong')
}