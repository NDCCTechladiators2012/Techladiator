// Define the questions for the quiz
const quizData = [
    {
        question: "What is the host city of olympics 2024?",
        answers: [
            { text: "New York", correct: false },
            { text: "Paris", correct: true },
            { text: "London", correct: false },
            { text: "Madrid", correct: false },
        ],
    },
    {
        question: "What is the highest mountain in the world?",
        answers: [
            { text: "Kilimanjaro", correct: false },
            { text: "Everest", correct: true },
            { text: "Denali", correct: false },
            { text: "Fuji", correct: false },
        ],
    },
    {
        question: "What is the largest country by land area?",
        answers: [
            { text: "Russia", correct: true },
            { text: "China", correct: false },
            { text: "Canada", correct: false },
            { text: "USA", correct: false },
        ],
    },
];

// Select the HTML elements
const questionContainer = document.querySelector(".questions");
const resultsContainer = document.querySelector(".results");
const restartButton = document.querySelector("#restart");
const totalSpan = document.querySelector("#total");
const correctSpan = document.querySelector("#correct");

// Define global variables
let currentQuestionIndex = 0;
let numCorrect = 0;

// Function to populate the HTML with question and answer options
function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionContainer.innerHTML = `
        <p>${currentQuestion.question}</p>
        <ul>
            ${currentQuestion.answers.map(answer => `
                <li>
                    <button class="answer-btn">${answer.text}</button>
                </li>
            `).join("")}
        </ul>
    `;
    const answerButtons = document.querySelectorAll(".answer-btn");
    answerButtons.forEach(button => {
        button.addEventListener("click", checkAnswer);
    }); 
}

// Function to check the selected answer and update global variables accordingly
function checkAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = quizData[currentQuestionIndex].answers.find(answer => answer.text === selectedButton.textContent).correct;
    if (isCorrect) {
        numCorrect++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex === quizData.length) {
        showResults();
    } else {
        showQuestion();
    }
}

// Function to display the final quiz results
function showResults() {
    questionContainer.style.display = "none";
    resultsContainer.style.display = "block";
    totalSpan.textContent = quizData.length;
    correctSpan.textContent = numCorrect;
}

// Add event listener to restart the quiz
restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0

    $(document).ready(function() {
        // Create navigation links for each H2 element
        $('h2').each(function(index) {
            var id = 'section' + (index + 1); // Generate a unique ID for each H2
            $(this).attr('id', id); // Assign the ID to the H2 element

            var linkText = $(this).text(); // Get the text content of the H2
            var link = $('<a></a>').attr('href', '#' + id).text(linkText); // Create a link with the ID as the anchor

            $('#navbar').append($('<li></li>').append(link)); // Add the link to the navigation bar
        });
    });