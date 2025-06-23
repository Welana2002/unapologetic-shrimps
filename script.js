let scores = { 1: 0, 2: 0 };
let crevettes = { 1: 0, 2: 0 };

function updateDisplay() {
  document.getElementById("score1").textContent = scores[1];
  document.getElementById("score2").textContent = scores[2];
  updateBadges("1");
  updateBadges("2");
}

function increment(player) {
  const other = player === "1" ? "2" : "1";
  scores[player]++;
  updateDisplay();
}

function rembourser(player) {
  if (scores[player] > 0) {
    scores[player]--;
    crevettes[player]++;
    updateDisplay();
  }
}

function updateBadges(player) {
  const container = document.getElementById("badges" + player);
  container.innerHTML = "";

  for (let i = 0; i < crevettes[player]; i++) {
    const img = document.createElement("img");
    img.src = "assets/shrimp.png";
    img.style.filter = computeFilter(scores[player]);
    container.appendChild(img);
  }
}

function computeFilter(score) {
  if (score === 0) return "brightness(100%)";
  if (score < 3) return "brightness(90%)";
  if (score < 6) return "brightness(75%) saturate(1.5)";
  return "brightness(60%) saturate(2)";
}

updateDisplay();
