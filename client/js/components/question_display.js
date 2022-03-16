function renderQuizQuestion() {
    document.querySelector('#page').innerHTML = `
    <section class="create-question">
        <form>
            <h2>Question:</h2>
            <p>${id}</p>
            <p>${value}</p>
            <p>${category.title}</p>
            <p>${answer}</p>
            <button>Submit</button>
      </form>
    </section>
    `
}

function renderApi() {
    
}