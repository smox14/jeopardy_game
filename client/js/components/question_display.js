function renderQuizBoard() {
  const username = checkUsername(state.userName)

  document.querySelector('#page').innerHTML =
    `
    <h2 class="welcome">Welcome ${username}! Select a difficulty below</h2>
    <section class="question-board">
    <div onClick=getQuestion(100)>$100</div>
    <div onClick=getQuestion(200)>$200</div>
    <div onClick=getQuestion(300)>$300</div>
    <div onClick=getQuestion(400)>$400</div>
    <div onClick=getQuestion(500)>$500</div>
    <div onClick=getQuestion(600)>$600</div>
    <div onClick=getQuestion(800)>$800</div>
    <div onClick=getQuestion(1000)>$1000</div>
    </section>
    <br>
    <section class="create-question"></section>
  `
}
renderQuizBoard()

function checkUsername(username) {
  if (username) {
    return username
  } else {
    return 'Guest'
  }
}

function renderQuizQuestion() {
  document.querySelector('#page .create-question').innerHTML = `
    

        <form onSubmit="grabQuestion(event)" class='question-form'>
            <h2>Worth: </h2>
            <p id="category">$${state.question.value}</p>
            <h2>Category:</h2>
            <p id="category">${state.question.category.title}</p>
            <h2>Question:</h2>            
            <p id="question">${state.question.question}</p>
            <input type="hidden" name="question" value="${state.question.question.replaceAll('\"', "\'")}">
            <input type="hidden" name="question_answer" class="question_answer" value="${state.question.answer}">
            <input name="user_input" class="user_input"></input><br>
            <button class="answer-btn">Submit</button>
            
      </form>
      <section class="user-answer hide"> </section>
    
    `
}

function grabQuestion(event) {
  event.preventDefault()
  const form = event.target
  const data = Object.fromEntries(new FormData(form))
  document.querySelector('.question-form').style.display = 'none'

  // document.querySelector('.answer-btn').style.visibility = "hidden"
  // document.querySelector('#question').style.visibility = "hidden"

  checkUserAnswer(data.user_input)
}