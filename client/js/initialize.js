const state = {
    question: []
  }


axios.get('/api/random')
.then(res => res.data)
.then(question => {
  state.question = question
  renderQuizQuestion()
})