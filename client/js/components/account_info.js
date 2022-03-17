function renderAccountInfo() {

  axios.get(`/api/questions/${state.userId}`)
    .then(res => {
      state.userResults = res.data
      const userResults = state.userResults.map(row => `
          <section class='row' data-id="${row.id}"><br/>
            <span>Value: ${row.value}</span><br/>
            <span>Question: ${row.question}</span><br/>
            <span>Category: ${row.category}</span><br/>
            <span>Correct answer: ${row.answer}</span><br/>
            <span>User answered correctly? ${row.user_correct}</span><br/>
            <span>User put: ${row.user_answer}</span><br/>
          </section>
        `).join('')
      document.querySelector('#page').innerHTML = `
            <section class="account_info">
              <h2>Welcome back ${state.userName}!</h2>
                <label>UserID:</label>
                <span>${state.userId}</span><br/>
                <label>Username:</label>
                <span>${state.userName}</span>
                <h2>Questions you've answered:</h2>
                ${userResults}
            </section>
        `
    })
}