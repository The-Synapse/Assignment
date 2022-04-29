/*Build a Quiz App by James Q Quick: https://youtube.com/playlist?list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx used as a guide and reference to help structure interaction*/

const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('questionCounter');


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [

    /*Question 1 of Dark History*/
    {
        question: "Who was the Butcher of Uganda?",
        choice1: "Mao Zedong",
        choice2: "Adolf Hitler",
        choice3: "Idi Amin",
        choice4: "Joseph Stalin",
        answer: 3
    },

    /*Question 2 of Dark History*/
    {
        question: "How many people died approximately in World War 2?",
        choice1: "40 - 50 million",
        choice2: "70 - 80 million",
        choice3: "95 - 105 million",
        choice4: "15 - 25 million",
        answer: 1
    },

    /*Question 3 of Dark History*/
    {
        question: "Who was the most Deadly Dictator in History?",
        choice1: "Adolf Hitler",
        choice2: "Joseph Stalin",
        choice3: "Pol Pot",
        choice4: "Mao Zedong",
        answer: 4
    },

    /*Question 4 of Dark History*/
    {
        question: "Which one of these wars or invasions was the longest and most deadly wars before World War 1?",
        choice1: "Mongol Invasions",
        choice2: "The Thirty Years war",
        choice3: "The American Civil war",
        choice4: "The Napolionic wars",
        answer: 1
    },

    /*Question 5 of Dark History*/
    {
        question: "Who was defeated in World War 1",
        choice1: "Germany",
        choice2: "The Axis",
        choice3: "The Central Powers",
        choice4: "The Triple Entente",
        answer: 3
    },

    ]

const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        return window.location.assign("game_over.html");
    }
    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion ["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        const classToApply =
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
            
            selectedChoice.parentElement.classList.add(classToApply);

            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQuestion();
            }, 1000);
    });
});

startGame();