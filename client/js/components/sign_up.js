function renderSignUp() {
  document.querySelector('#page').innerHTML = `
    <section class="sign-up">
      <form action="" onSubmit="signUp(event)">
        <h2>Sign up:</h2>
        <fieldset>
          <label for="">Username: </label><br>
          <input type="text" name="name">
        </fieldset>
        <fieldset>
          <label for="">Email: </label><br>
          <input type="text" name="email">
        </fieldset>
        <fieldset>
          <label for="">Password: </label><br>
          <input type="password" name="password">
        </fieldset>
        <button>Sign Up</button>
      </form>
    </section>
  `
}

function signUp(event) {
  event.preventDefault()
  const form = event.target
  const data = Object.fromEntries(new FormData(form))
  axios
    .post('/api/users', data)
    .then(res => res.data)
    .then(userName => console.log(userName))
}