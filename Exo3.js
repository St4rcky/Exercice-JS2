let listes = document.querySelectorAll("li");
boutons = document.querySelectorAll("button");

listes.forEach((liste) => {
  liste.addEventListener("click", function () {
    liste.style.color = "green";
  });
});

boutons.forEach((bouton) => {
  bouton.addEventListener("click", function () {
    bouton.parentNode.remove();
  });
});
