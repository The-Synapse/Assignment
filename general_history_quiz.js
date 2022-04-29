/*Build a Quiz App by James Q Quick: https://youtube.com/playlist?list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx used as a guide and reference to help structure interaction*/

const question = document.getElementById("question");
const answers = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('questionCounter');

let currentQuestion = {};
let acceptAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [];


fetch("https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple")

    .then(res => {
        return res.json();
    })
    .then(loadedQuestions => {
        console.log(loadedQuestions.results);
        questons = loadedQuestions.results.map(loadedQuestions => {
            const formattedQuestion = {
            question: loadedQuestions.question
        };

        const answerChoices = [...loadedQuestions.incorrect_answers];
        formattedQuestion.answer = Math.floor(math.random() * 10) + 1;
        answerChoices.splice(
            formattedQuestion.answer - 1,
            0,
            loadedQuestions.correct_answer
        );

        answerChoices.forEach((choice, index)=> {
            formattedQuestion["choice" + (index+1)] = choice;
        });

        return formattedQuestion;
    });
    startGame();
    })

    const MAX_QUESTIONS = 10;
    
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
