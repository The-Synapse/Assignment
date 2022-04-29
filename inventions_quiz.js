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

    /*Question 1 of Inventions*/
    {
        question: "Who invented The Bicycle?",
        choice1: "Karl von Drais",
        choice2: "Issac Newton",
        choice3: "Louis Pasteur",
        choice4: "John Logie Baird",
        answer: 1
    },

    /*Question 2 of Inventions*/
    {
        question: "Who invented the first working Areoplane?",
        choice1: "Adam Smith",
        choice2: "Igor Sikorsky",
        choice3: "Leonardo da vinci",
        choice4: "The Wright brothers",
        answer: 4
    },

    /*Question 3 of Inventions*/
    {
        question: "When was the first coloured TV invented?",
        choice1: "1937",
        choice2: "1928",
        choice3: "1955",
        choice4: "1964",
        answer: 2
    },

    /*Question 4 of Inventions*/
    {
        question: "In what century, was the printing press Invented?",
        choice1: "18th century",
        choice2: "15th century",
        choice3: "16th century",
        choice4: "11th century",
        answer: 2
    },

    /*Question 5 of Inventions*/
    {
        question: "Who invented the World Wide Web?",
        choice1: "Eric Tigerstedt",
        choice2: "Lee Harvey Oswald",
        choice3: "Tim Berners-Lee",
        choice4: "Alan Turing",
        answer: 3
    },

    /*Question 6 of Inventions*/
    {
        question: "Who invented the first handheld Mobile phone Invented?",
        choice1: "Martin Cooper",
        choice2: "Neil Armstrong",
        choice3: "Alexander Graham Bell",
        choice4: "Thomas Edison",
        answer: 1
    },

    /*Question 7 of Inventions*/
    {
        question: "Who invented the transistor?",
        choice1: "Rudolf Weigl, Ludwik Fleck and Hans Zinsser",
        choice2: "Henry Ford",
        choice3: "The Brothers Grimm",
        choice4: "John Bardeen, Walter Brattain and William Shockley",
        answer: 4
    },

    /*Question 8 of Inventions*/
    {
        question: "When was the first personal computer invented?",
        choice1: "1974",
        choice2: "1981",
        choice3: "1989",
        choice4: "1995",
        answer: 2
    },

    /*Question 9 of Inventions*/
    {
        question: "Who invented The Photographic Camera?",
        choice1: "Mikhail Gorbachev",
        choice2: "George Eastman",
        choice3: "Joseph Nicephore Niepce",
        choice4: "Charlie Chaplin",
        answer: 3
    },
    /*Question 10 of Inventions*/
    {
        question: "When was the first car invented?",
        choice1: "1886",
        choice2: "1894",
        choice3: "1871",
        choice4: "1904",
        answer: 1
    },
    ]

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

startGame();