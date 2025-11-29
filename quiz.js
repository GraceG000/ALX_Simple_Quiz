// Function declaration
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Get the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Prevent errors if nothing is selected
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer.";
        return;
    }

    const userAnswer = selectedOption.value;

    // Compare userAnswer with correctAnswer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to Submit Answer button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
