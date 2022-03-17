function renderSignUp() {
  document.querySelector('#page').innerHTML = `
    <section class="user sign-up">
      <h2>Sign up</h2>
      <div class="error"></div>
      <form action="" onSubmit="signUp(event)">
        <fieldset>
          <label for="">Username: </label><br>
          <input type="text" name="name" onClick="clearError('sign-up')">
        </fieldset>
        <fieldset>
          <label for="">Email: </label><br>
          <input type="email" name="email" onClick="clearError('sign-up')">
        </fieldset>
        <fieldset>
          <label for="">Password: </label><br>
          <input type="password" name="password">
        </fieldset>
        <button>Sign Up</button>
      </form>
      <div class="user-form-footer">
      <p>Already have an account? <a href="#" onClick="renderLogin()">Sign in</a></p> 
    </section>
  `
}

function signUp(event) {
  event.preventDefault()
  const form = event.target
  const data = Object.fromEntries(new FormData(form))
  var errorDOM = document.querySelector('.sign-up .error')
  errorDOM.textContent = ''
  axios
    .post('/api/users', data)
    .then(res => res.data)
    .then(userName => {

      // console.log(userName)
      // renderLogin()
      // document.querySelector('.log-in .error').innerHTML = `You have successfully signed up, please log in below ${userName}`
      // document.querySelector('.log-in .error').style.color = 'yellow'

      document.querySelector("#header-nav").style.pointerEvents = 'none';
      document.querySelector('#page').innerHTML = ` 
        <section class='login-success'>
          <img src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif">
        </section>`
      
      sleep(2000).then(() => { 
        document.querySelector("#header-nav").style.pointerEvents = 'auto';
        document.querySelector('#page').innerHTML = `
          <section class="user sign-up success">
            <span class="material-icons">check_circle</span>
            <p> Your account has been created successfully!</p>
            <button onClick="renderLogin()">Ok</button>
          </section>
        `
      })
    })
    .catch(error => {
      errorDOM.textContent = error.response.data.message
    })
}