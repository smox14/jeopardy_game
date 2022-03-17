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

function saveToDatabase(){
  let obj = state.question 
    obj.user_id = state.userId
    axios
        .post('/api/questions', obj)
        .then(res => res.data)
}

function renderUserAnswerResult(userAnswer){
  let userAnswerDOM = document.querySelector('.user-answer')
  userAnswerDOM.style.visibility = "visible"
  if(userAnswer){
    audioCorrect.play();
    state.userScore += parseInt(state.question.value)
    userAnswerDOM.innerHTML = `<h2> CORRECT! </h2>`
    
  } else {
    audioInCorrect.play();
    userAnswerDOM.innerHTML = `
      <h2>INCORRECT!</h2>
      <p> The Correct Answer: ${state.question.answer}</p>
      <p> Your Answer: ${state.question.user_answer}</p>
      
    `
  }
  
}
