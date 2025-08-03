function checkAnswer() {
    const correctAnswer = "4";
    const selected = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById('feedback');

    if (selected) {
        const userAnswer = selected.value;
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        feedback.textContent = "Please select an answer.";
    }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);
