let ajouter = document.querySelector("button");
let listes = document.querySelector("ul");
let deleteAll = document.getElementById("deleteAll");
let storage = JSON.parse(localStorage.getItem("taches")) || [];

ajouter.addEventListener("click", function (e) {
  e.preventDefault();
  let taches = document.getElementById("nomDeTache").value;
  let liste = document.createElement("li");
  let texte = document.createElement("p");
  texte.textContent = taches;
  listes.appendChild(liste);
  liste.style.display = "flex";
  liste.style.alignItems = "center";

  let texteContainer = document.createElement("div");
  liste.appendChild(texteContainer);

  liste.addEventListener("dblclick", function (e) {
    let input = document.createElement("input");
    input.type = "text";
    input.value = liste.textContent;
    texte.appendChild(input);
    input.addEventListener("blur", function () {
      texte.textContent = input.value;
    });
  });

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
  document.getElementById("nomDeTache").value = "";
  let deleteButton = document.createElement("button");
  deleteButton.textContent = `\u00D7`;
  liste.appendChild(deleteButton);

  deleteButton.addEventListener("click", function () {
    liste.remove();
  });

  storage.push(taches);
  localStorage.setItem("taches", JSON.stringify(storage));
});

deleteAll.addEventListener("click", function () {
  listes.innerHTML = "";
  localStorage.removeItem("taches");
  storage = [];
});
