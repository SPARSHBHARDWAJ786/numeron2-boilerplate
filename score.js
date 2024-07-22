
// Iteration 8: Making scoreboard functional
const score = localStorage.getItem("score") || 0;
document.getElementById("score-board").innerText = score;

document.getElementById("play-again-button").addEventListener("click", function() {
  window.location.href = "game.html";
});
