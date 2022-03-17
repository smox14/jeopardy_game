function getAllResultsToState() {
  axios.get('/api/questions')
    .then(res => {
      state.allResults = res.data
      renderAllResults()
    })
}

function renderAllResults() {
  document.querySelector('#page').innerHTML = `
      <section class="all-results">
      <h2>Questions answered from all users:</h2>
        ${createAllResultsDOM()}
      </section>
      `
}

function createAllResultsDOM() {
  return state.allResults.map(row => `
      <section class='row' data-id="${row.id}"><br/>
        <span>Value: ${row.value}</span><br/>
        <span>Question: ${row.question}</span><br/>
        <span>Category: ${row.category}</span><br/>
        <span>Correct answer: ${row.answer}</span><br/>
        <span>User answered correctly? ${row.user_correct}</span><br/>
        <span>User put: ${row.user_answer}</span><br/>
      </section>
    `).join('')
}