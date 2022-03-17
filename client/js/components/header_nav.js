function renderHeaderNav() {
  let userTag = ''
  if (state.userName) {
    userTag = `<li title="Account Management" class="material-icons account_box" onClick="render('account')">account_box</li>
    <li title="Log Out" class="material-icons login-icon" onClick="render('logout')">logout</li>
    `
  } else {
    userTag = `
        <li title="Sign Up" class="material-icons sign-up-icon" onClick="render('signUp')">person_add</li>
        <li title="Login" class="material-icons login-icon" onClick="render('login')">login</li>
      `
  }
  document.querySelector('#header-nav').innerHTML = `
      <ul>
        <li title="Quiz Page" class="material-icons quiz-question" onClick="render('quizQuestion')">quiz</li>
        <li title="All Result Records" class="material-icons travel_explore" onClick="render('allResults')">travel_explore</li>
        <li title="World Percentage Score" class="material-icons query_stats" onClick="render('percentage')">query_stats</li>
        ${userTag}
      </ul>
    `
}

renderHeaderNav()

function render(component) {
  if (component === 'quizQuestion') {
    renderQuizBoard()
  } else if (component === 'signUp') {
    renderSignUp()
  } else if (component === 'login') {
    renderLogin()
  } else if (component === 'account') {
    renderAccountInfo()
  } else if (component === 'allResults') {
    getAllResultsToState()
  } else if (component === 'logout') {
    logOut()
  } else if (component === 'percentage') {
    renderPercentage()
  }

}