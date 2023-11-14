// script.js
const correctAnswer = "15"; // Replace with the actual answer

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.toLowerCase();

    if (userAnswer === correctAnswer) {
        alert("Congratulations! You solved the riddle. Go towards CAD Lab, the next clue is awaiting you.. ");
    } else {
        alert("Oops! Try again.");
    }
}
