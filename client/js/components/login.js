function renderLogin() {
  document.querySelector('#page').innerHTML = `
    <section class="user log-in">
      <h2>Login</h2>  
      <div class="error"></div>
      <form action="" onSubmit="login(event)">  
        <fieldset>
          <label for="">Email: </label><br>
          <input type="email" name="email" onClick="clearError('log-in')">
        </fieldset>
        <fieldset>
          <label for="">Password: </label><br>
          <input type="password" name="password">
        </fieldset>
        <button>Login</button>
      </form>
      <div class="user-form-footer">
      <p>Not a member? <a href="#" onClick="renderSignUp()">Create account</a> </p> 
      </div>
    </section>
  `
}

function clearError(className) {
  var errorDOM = document.querySelector(`.${className} .error`)
  errorDOM.textContent = ''
}

function login(event) {
  event.preventDefault()
  const form = event.target
  const data = Object.fromEntries(new FormData(form))
  // var errorDOM = document.querySelector('.log-in .error')
  // errorDOM.textContent = ''
  axios
    .post('/api/sessions', data)
    .then(res => res.data)
    .then(user => {
      state.userName = user.userName
      state.userId = user.userId
    })
    .then( () => {
      document.querySelector("#header-nav").style.pointerEvents = 'none';
      document.querySelector('#page').innerHTML = ` 
      <section class='login-success'>
    <img src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif">
      </section>
      `
      sleep(2000).then(() => {

       document.querySelector('#page').innerHTML = ` 
        <section class='user login success'>
          <span class="material-icons">check_circle</span>
          <p> Login Success!</p>
        </section>
        `
        document.querySelector("#header-nav").style.pointerEvents = 'auto';
        sleep(1500).then(() => {
          renderHeaderNav()
          renderQuizBoard()
        })
        // renderAccountInfo()
      })  
    })
    .catch(error => {
      let errorDOM = document.querySelector('.log-in .error')
      errorDOM.textContent = 'Invalid email or password'

    })
}

function logOut() {
  axios
    .delete('/api/sessions')
    .then(() => {
      initialSetting()
      sleep(500).then(() => {
         document.querySelector('#page').innerHTML = ` 
        <section class='user logout success'>
          <p> You have successfully logged out.</p>
          <br>
        </section>
        `
        sleep(2000).then(() => {
          renderHeaderNav()
          renderQuizBoard()  
        })
      })
      
    }) 
}