let data = JSON.parse(localStorage.getItem("shrimpData")) || {
  1: { count: 0, shrimp: 0 },
  2: { count: 0, shrimp: 0 }
};

const titles = [
  "Crevette timide",
  "Crevette confuse",
  "Crevette coupable",
  "Crevette repentante",
  "Crevette ruinée"
];

function save() {
  localStorage.setItem("shrimpData", JSON.stringify(data));
}

function updateUI() {
  [1, 2].forEach(id => {
    const count = data[id].count;
    const otherCount = data[id === 1 ? 2 : 1].count;
    const shrimps = data[id].shrimp;
    document.getElementById("count" + id).textContent = count + "€";
    document.getElementById("title" + id).textContent =
      titles[Math.min(Math.floor(count / 3), titles.length - 1)];

    const badges = document.getElementById("badges" + id);
    badges.innerHTML = "";
    for (let i = 0; i < shrimps; i++) {
      const badge = document.createElement("span");
      badge.className = "badge";
      badge.classList.add(
        i < otherCount / 2 ? "level-3" : i < otherCount ? "level-2" : "level-1"
      );
      badge.textContent = "🦐";
      badges.appendChild(badge);
    }
  });
}

function increment(id) {
  data[id].count++;
  save();
  updateUI();
}

function refund(id) {
  if (data[id].count > 0) {
    data[id].count--;
    data[id].shrimp++;
    save();
    updateUI();
  }
}

updateUI();
