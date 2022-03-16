const state = {
    question: []
}


axios.get('https://jservice.io/api/random')
    .then(res => res.data)
    .then(question => {
        state.question = question[0]
        // console.log(state)

        renderQuizQuestion()
    })