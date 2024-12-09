const Questios = [
    {
        question :"Which the name of your country?",
        answer :[{
                 text:"cambodai", correct:true

                },
                {
                    text:"thailand", correct:false
                },
                {
                    text:"vetnam", correct:false
                },
                {
                    text:"singapore", correct:false
                },
            ]
        
    },
    {
        question :"Which the big animal?",
        answer :[{
                 text:"cat", correct:false

                },
                {
                    text:"elephent", correct:true
                },
                {
                    text:"dog", correct:false
                },
                {
                    text:"pig", correct:false
                },
            ]
        
    },
    {
        question :"Which the name of auther ?",
        answer :[{
                 text:"pary", correct:true

                },
                {
                    text:"sok", correct:false
                },
                {
                    text:"thida", correct:false
                },
                {
                    text:"phalin", correct:false
                },
            ]
        
    },
    {
        question :"Which the name major of auther?",
        answer :[{
                 text:"archititure", correct:false

                },
                {
                    text:"business", correct:false
                },
                {
                    text:"IT", correct:true
                },
                {
                    text:"adminsrtation", correct:false
                },
            ]
        
    },
];
const answerBtns =  document.getElementById('answer-btn');
const Question  = document.getElementById('Question');
const next  = document.querySelector('.next');

let correctIndex = 0;
let sore = 0;

const startQuize = ()=>{
    correctIndex = 0;
    sore=0;
    next.innerHTML= "Next";
    showQuestion();
}
const showQuestion = ()=>{
    resetState();
    let correctQuestion = Questios[correctIndex];
    let questionNO = correctIndex+1;
    Question.innerHTML = questionNO + '.'+ correctQuestion.question;


    correctQuestion.answer.forEach(answer =>{
        const button  = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtns.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
            
        }
        button.accessKeyLabel('clcik',selectAnswer);


    });
}

const resetState = ()=>{
    next.style.display = 'none';
    while(answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild);
        
    }
}

const selectAnswer = (e)=>{
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct="true";
    if (isCorrect){
        selectAnswer.classList.add('correct');
        sore++;
    }else{
        selectAnswer.classList.add('incorrect');
    }
    Array.from(answerBtns.children).forEach(button =>{
        if (!button.dataset.correct=='true'){
            button.classList.add('correct');
        }else{
            button.classList.add('incorrect');
        }
        next.style.display = 'block';
    })

}
const showSore =()=>{
    resetState();
    Question.innerHTML =`Your score ${sore} out of ${Questios.length}`;
    next.innerHTML = "Play Again";
    next.style.display = 'block';
}
const handlbtn =()=>{
    correctIndex++;
    if(correctIndex < Questios.length){
        showQuestion();
    }else{
        showSore();
    }
}
next.addEventListener('click',()=>{
    if(correctIndex < Questios.length){

    }else{

        startQuize();
    }
})