function renderLogin() {
  document.querySelector('#page').innerHTML = `
    <section class="log-in">
      <div class="error"></div>
      <form action="" onSubmit="login(event)">
        <h2>Login:</h2>
        <fieldset>
          <label for="">Email: </label><br>
          <input type="email" name="email">
        </fieldset>
        <fieldset>
          <label for="">Password: </label><br>
          <input type="password" name="password">
        </fieldset>
        <button>Login</button>
      </form>
    </section>
  `
}

function login(event) {
  event.preventDefault()
  const form = event.target
  const data = Object.fromEntries(new FormData(form))
  axios
    .post('/api/sessions', data)
    .then(res => res.data)
    .then(userName => console.log(userName))
    .catch(error => {
      let errorDOM = document.querySelector('.log-in .error')
      errorDOM.textContent = error.response.data.message
    })
}