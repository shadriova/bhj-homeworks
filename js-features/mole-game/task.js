let deadCounter = document.getElementById("dead");
let lostCounter = document.getElementById("lost");

let dead = 0;
let lost = 0;

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

function resetGame() {
  dead = 0;
  lost = 0;
  deadCounter.textContent = dead;
  lostCounter.textContent = lost;
}

function checkGameStatus() {
  if (dead >= 10) {
    alert("Поздравляем! Вы победили!");
    resetGame();
  } else if (lost >= 5) {
    alert("К сожалению, вы проиграли.");
    resetGame();
  }
}

for (let i = 1; i <= 9; i++) {
  getHole(i).onclick = function() {
    if (this.classList.contains('hole_has-mole')) {
      dead++;
      deadCounter.textContent = dead;
    } else {
      lost++;
      lostCounter.textContent = lost;
    }
    checkGameStatus();
  };
}
