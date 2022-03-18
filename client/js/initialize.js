const state = {
//   userId: null,
//   userName: null,
//   userScore: 0,
  question: null
}
var audioIntro = new Audio('../../sounds/jeopardy-intro.mp3');
var audioCorrect = new Audio('../../sounds/rightanswer.mp3');
var audioInCorrect = new Audio('../../sounds/wronganswer.mp3');

initialSetting()

function getQuestion(value = null) {
  document.querySelector('.welcome').style.display = 'none'
  if (value) {
    axios.get(`https://jservice.io/api/clues?value=${value}`)
      .then(res => res.data)
      .then(question => {
        state.question = question[Math.floor(Math.random() * question.length)]
        renderQuizQuestion()
      })
  } else {
    axios.get('https://jservice.io/api/random')
      .then(res => res.data)
      .then(question => {
        state.question = question[0]
        renderQuizQuestion()
      })
  }
}

function initialSetting() {
  state.userScore = 0
  state.question = null
  
  axios.get('/api/sessions')
    .then(res => res.data )
    .then( user => {
        console.log(user)
        if(user.user_info) {
            state.userId = user.user_info.userId
            state.userName = user.user_info.userName
            state.email = user.email
        } else {
            state.userId = null
            state.userName = null
            state.email = null
        }
        renderHeaderNav()    
        renderQuizBoard()
    })
}


function playMusic() {
  if (audioIntro.paused) {
    console.log('yes')
    audioIntro.play();
  } else {
    audioIntro.pause();
  }
}

// sleep time expects milliseconds
function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}