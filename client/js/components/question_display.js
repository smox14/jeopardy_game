function renderQuizBoard(){
  document.querySelector('#page').innerHTML = 
    `
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
    <section class="create-question"></section>
  `
}
renderQuizBoard()


function renderQuizQuestion() {
  document.querySelector('#page .create-question').innerHTML = `
    
        <form onSubmit="grabQuestion(event)">
            <h2>Question:</h2>
            <p>For: $${state.question.value}</p>
            <p>Category: ${state.question.category.title}</p>
            <p>Unique ID: ${state.question.id}</p>
            <p id="question">Question: ${state.question.question}</p>
            <input type="hidden" name="question" value="${state.question.question.replaceAll('\"', "\'")}">
            <p>Answer: ${state.question.answer}</p> 
            <input type="hidden" name="question_answer" class="question_answer" value="${state.question.answer}">
            <input name="user_input" class="user_input"></input><br>
            <button class="answer-btn">Submit</button>
            
      </form>
        <button style="visibility:hidden;" class="next-btn" onClick="getQuestion(${state.question.value})">Next</button>
      <section class="user-answer"> </section>
    
    `
}

function grabQuestion(event) {
  event.preventDefault()
  const form = event.target
  const data = Object.fromEntries(new FormData(form))
  console.log(data)
  document.querySelector('.user_input').style.visibility = "hidden"
  document.querySelector('.answer-btn').style.visibility = "hidden"
  document.querySelector('.next-btn').style.visibility = "visible"

  checkUserAnswer(data.user_input)  
}

