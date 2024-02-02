let bouton = document.getElementById("bouton1");
let paragraphe = document.querySelector("p");

bouton.addEventListener("click", function () {
  paragraphe.textContent = "Hello World!";
});
