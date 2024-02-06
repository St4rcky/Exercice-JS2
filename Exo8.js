function compteARebours() {
  const temps = document.querySelector("input");
  const tempsSeconde = parseInt(temps.value);
  if (isNaN(tempsSeconde) || tempsSeconde <= 0) {
    alert("Veuillez rentrer un nombre valide");
  }
}
function arreter() {
  clearInterval(intervalID);
}
function reprendreCompteARebours() {
  intervalID = setInterval(decrementeTemps, 1000);
}
