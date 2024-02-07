let timer;
let tempsSeconde;
let enCours = true;

function demarrer() {
  if (!enCours) {
    return;
  }
  const temps = document.querySelector("input");
  tempsSeconde = parseInt(temps.value);
  if (tempsSeconde <= 0 || isNaN(tempsSeconde)) {
    alert("Veuillez entrer un nombre valide");
  }
  timer = setInterval(decrementer, 1000);
  tempsRestant();
  enCours = false;
}
function tempsRestant() {
  const affichage = document.querySelector("p");
  affichage.textContent = tempsSeconde;
}
function decrementer() {
  tempsSeconde--;
  tempsRestant();
  if (tempsSeconde <= 0) {
    clearInterval(timer);
  }
}
function arreter() {
  clearInterval(timer);
}
function reprendre() {
  timer = setInterval(decrementer, 1000);
}
