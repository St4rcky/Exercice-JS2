let listes = document.querySelectorAll("li");
let boutons = document.querySelectorAll("button");

// listes.forEach((liste) => {
for (let liste of listes) {
  liste.addEventListener("click", function () {
    liste.style.color = "green";
  });
}

// boutons.forEach((bouton) => {
for (let bouton of boutons) {
  bouton.addEventListener("click", function () {
    bouton.parentNode.remove();
  });
}
