const state = {
    userId:null,
    userName:null,
    question: []
}

function getQuestion(value=null) {
    
    console.log(value)
    if(value){
        axios.get(`https://jservice.io/api/clues?value=${value}`)
        .then(res => res.data)
        .then(question => {
            state.question = question[Math.floor(Math.random() * question.length)]
            console.log(state.question)
            renderQuizQuestion()
        })
    } else {
        axios.get('https://jservice.io/api/random')
        .then(res => res.data)
        .then(question => {
            state.question = question[0]
            console.log(state.question)
            renderQuizQuestion()
        })
    }
}


