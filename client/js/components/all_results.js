function getAllResultsToState() {
    axios.get('/api/questions')
        .then(res => {
            state.allResults = res.data
            console.log(state.allResults)
            renderAllResults()
        })
}

function renderAllResults() {
    document.querySelector('#page').innerHTML = `
      <section class="all-results">
      <h1>Answered questions from All users</h1>
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
        <span>User answered correctly? ${row.user_answer}</span><br/>
      </section>
    `).join('')
  }

//   <p>Category ID: ${row.category_id}</p>
// <p>Unique Question ID: ${row.question_id}</p>