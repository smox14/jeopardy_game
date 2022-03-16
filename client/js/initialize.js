const state = {
    question: []
}

function getQuestion() {
    axios.get('https://jservice.io/api/random')
        .then(res => res.data)
        .then(question => {
            state.question = question[0]
            renderQuizQuestion()
        })
}

getQuestion()