const state = {
    userId:null,
    userName:null,
    userScore:0,
    question: null
}
var audioIntro = new Audio('../../sounds/jeopardy-intro.mp3');
var audioCorrect = new Audio('../../sounds/rightanswer.mp3');
var audioInCorrect = new Audio('../../sounds/wronganswer.mp3');

initialSetting()

function getQuestion(value=null) {
    
    if(value){
        axios.get(`https://jservice.io/api/clues?value=${value}`)
        .then(res => res.data)
        .then(question => {
            state.question = question[Math.floor(Math.random() * question.length)]
            // console.log(state.question)
            renderQuizQuestion()
        })
    } else {
        axios.get('https://jservice.io/api/random')
        .then(res => res.data)
        .then(question => {
            state.question = question[0]
            // console.log(state.question)
            renderQuizQuestion()
        })
    }
}

function initialSetting() {
    state.userScore = 0
    state.question = null
    state.userId = null
    state.userName = null
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
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}