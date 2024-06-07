let data = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: 0
    },
    {
        question: "What is the capital of Germany?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: 2
    },
    {
        question: "What is the capital of Spain?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: 3
    },
    {
        question: "What is the capital of England?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correctAnswer: 1
    }
]

let questionIndex = 0;
let score = 0;
let answer = document.querySelector(".answer");
let answers = document.getElementById("answers");
let question = document.getElementById("question");

function startQuiz(){
    console.log("Quiz started");
    questionIndex = 0;
    loadQuestion();
}

function loadQuestion(){
    answers.innerHTML = "";
    let currentQuestion = data[questionIndex]; 
    let questionNo = questionIndex + 1; 
    question.innerHTML = questionNo + ". " +currentQuestion.question;
    question.classList.add("question");
    console.log(currentQuestion.question);
    let label;
    for(i=0;i<data[questionIndex].answers.length;i++){
        
        let div = document.createElement("div");
        div.setAttribute("class", "answer");
        let input = document.createElement("input");
        input.setAttribute("type", "radio");
        let label = document.createElement("label");
        label.innerHTML = data[questionIndex].answers[i];
        answer.appendChild(input);
        answer.appendChild(label);
        console.log("ans");
        div.appendChild(input);
        div.appendChild(label);
        answers.appendChild(div);
        // answers.classList.add("answers");
        div.classList.add("answer");
    }   
   

    questionIndex++;
}

document.getElementById("next").addEventListener("click", nextQues=()=>{
    let selected = document.querySelector("input[type=radio]:checked");
    if(selected){
        let answer = selected.nextElementSibling.innerHTML;
        let correctAnswer = data[questionIndex-1].answers[data[questionIndex-1].correctAnswer];
        if(answer === correctAnswer){
            score++;
        }
        if(questionIndex < data.length){
            loadQuestion();
        }else{
            alert("Quiz finished. Your score is: " + score);
        }}
});



startQuiz();

