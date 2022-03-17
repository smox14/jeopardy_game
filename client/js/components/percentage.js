function renderPercentage() {
    axios.get('/api/percentages')
    .then(res => {
      state.percentage = res.data
      createPercentageDOM()
    })
}

function createPercentageDOM() {
    document.querySelector('#page').innerHTML = `
        <section class="all-percentage">
        <h2>Percentage correct answers from all users:</h2>
          ${mapPercentage()}
        </section>
        `
  }

  function mapPercentage() {
      const percentage = parseFloat(state.percentage[0].percentage_correct).toFixed(2)

    return state.percentage.map(row => `
        <section class='row' data-id="${row.id}"><br/>
          <span>Total questions answered: ${row.total_questions_answered}</span><br/>
          <span>Percentage  of correct answers: ${percentage}%</span><br/>
        </section>
      `).join('')
  }