function renderAccountInfo() {
   
      axios.get(`/api/questions/${state.userId}`)
      .then(res => {
          state.userResults = res.data
          console.log(state.userResults)
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
                <label>UserID:</label>
                <span>${state.userId}</span>
                <label>Username:</label>
                <span>${state.userName}</span>
                <h1>Answered questions from you</h1>

                ${userResults}
            </section>
            
        ` 
         })
    

      
}