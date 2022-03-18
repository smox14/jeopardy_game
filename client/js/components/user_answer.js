function checkUserAnswer(user_input) {
  if (state.question.answer.toLowerCase() === user_input.toLowerCase()) {
    state.question.user_correct = true
  } else {
    state.question.user_correct = false
  }
  state.question.user_answer = user_input
  saveToDatabase()
  renderUserAnswerResult(state.question.user_correct)
}

function saveToDatabase() {
  let obj = state.question
  obj.user_id = state.userId
  axios
    .post('/api/questions', obj)
    .then()
}

function renderUserAnswerResult(userAnswer) {
  let userAnswerDOM = document.querySelector('.user-answer')
  // userAnswerDOM.style.visibility = "hidden"
  // userAnswerDOM.style.border = "none"
  userAnswerDOM.classList.toggle('hide')
  if (userAnswer) {
    audioCorrect.play();
    state.userScore += parseInt(state.question.value)
    userAnswerDOM.innerHTML = `<h2> CORRECT! </h2>`

    userAnswerDOM.style.border = "2px solid #F5BB00"
    userAnswerDOM.style.backgroundColor = "#064789"
    userAnswerDOM.style.borderRadius = "10px"
    userAnswerDOM.style.margin = "0 auto"

    // userAnswerDOM.style.visibility = "visible"
  } else {
    audioInCorrect.play();
    state.userScore -= parseInt(state.question.value)
    userAnswerDOM.innerHTML = `
      <h2>INCORRECT!</h2>
      <p> The correct answer: ${state.question.answer}</p>
      <p> Your answer: ${state.question.user_answer}</p>
      
    `
    userAnswerDOM.style.border = "2px solid #F5BB00"
    userAnswerDOM.style.backgroundColor = "#064789"
    userAnswerDOM.style.borderRadius = "10px"
    userAnswerDOM.style.margin = "0 auto"
  }

  sleep(4000).then(() => {
    userAnswerDOM.classList.toggle('hide')
    getQuestion(state.question.value)
  })
}