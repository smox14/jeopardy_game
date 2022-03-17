
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

function clearError(className){
  var errorDOM = document.querySelector(`.${className} .error`)
  errorDOM.textContent = ''
}

function login(event) {
  event.preventDefault()
  const form = event.target
  const data = Object.fromEntries(new FormData(form))
  var errorDOM = document.querySelector('.log-in .error')
  errorDOM.textContent = ''
  axios
    .post('/api/sessions', data)
    .then(res => res.data)
    .then(user => {
      state.userName = user.userName
      state.userId = user.userId
      renderHeaderNav()
      renderAccountInfo()
      
    })
    .catch(error => {
      let errorDOM = document.querySelector('.log-in .error')
      errorDOM.textContent = error.response.data.message
    })
}

function logOut() {
  axios
    .delete('/api/sessions')
    .then()
    initialSetting()
    renderHeaderNav()
    renderQuizBoard()
}