function renderQuizQuestion() {
    document.querySelector('#page').innerHTML = `
    <section class="create-question">
        <form onSubmit="grabQuestion(event)">
            <h2>Question:</h2>
            <p>${state.question.value}</p>
            <input type="hidden" name="value" value="${state.question.value}">
            <p>ID: ${state.question.id}</p>
            <input type="hidden" name="question_id" value="${state.question.id}">
            <p name="question">Question: ${state.question.question}</p>
            <input type="hidden" name="question" value="${state.question.question.replaceAll('\"', "\'")}">
            <p name="answer">Answer: ${state.question.answer}</p>
            <input type="hidden" name="question_answer" value="${state.question.answer}">
            <input name="user_input" class="user_input"></input>
            <button class="answer-btn" >Submit</button>
      </form>
    </section>
    `
}

function grabQuestion(event) {
    event.preventDefault()
    const form = event.target
    const data = Object.fromEntries(new FormData(form))
    console.log(data)

    // axios.post('/api/treasures', data)
    //     .then(res => {
    //         console.log(res.data)
    //         return res.data
    //     })
}