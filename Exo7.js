const horaire = document.getElementById("horaire");
const fuseaux = {
  NewYork: -6,
  Londres: -1,
  Moscou: 2,
  Tokyo: 8,
  Paris: 0,
};

function horloge() {
  let fuseau = fuseaux[document.getElementById("fuseaux").value];
  let heures = new Date(new Date().getTime() + fuseau * 3600 * 1000);
  let heure = heures.getHours();
  let minute = heures.getMinutes();
  let seconde = heures.getSeconds();
  if (heure < 10) {
    heure = "0" + heure;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (seconde < 10) {
    seconde = "0" + seconde;
  }

  let now = heure + ":" + minute + ":" + seconde;

  horaire.textContent = now;
}

setInterval(horloge, 1000);

//   const fuseaux = document.getElementById("fuseaux").value
//   let fuseau;
//   switch (fuseaux) {
//     case "NewYork":
//       fuseau = -5;
//       break;
//     case "Londres":
//       fuseau = 0;
//       break;
//     case "Moscou":
//       fuseau = 3;
//       break;
//     case "Tokyo":
//       fuseau = 9;
//       break;
//     default:
//       fuseau = 0;
//   }
//    const heures = new Date(new Date().getTime() + fuseau * 3600 * 1000);
