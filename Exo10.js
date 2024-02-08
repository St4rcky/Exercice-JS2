let ajouter = document.querySelector("button");
let listes = document.querySelector("ul");

ajouter.addEventListener("click", function (e) {
  e.preventDefault();
  let taches = document.querySelector("input").value;
  let liste = document.createElement("li");
  let texte = document.createElement("p");
  texte.textContent = taches;
  listes.appendChild(liste);
  liste.style.display = "flex";
  liste.style.alignItems = "center";

  let caseACocher = document.createElement("input");
  caseACocher.type = "checkbox";
  liste.appendChild(caseACocher);
  liste.appendChild(texte);
  caseACocher.addEventListener("change", function () {
    if (this.checked) {
      liste.style.color = "green";
    } else {
      liste.style.color = "black";
    }
  });
});

// for (let bouton of boutons) {
//   bouton.addEventListener("click", function () {
//     bouton.parentNode.remove();
//   });
// }
