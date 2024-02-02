let newDiv = document.createElement("div");
let newP = document.createElement("p");
let listeCouleur = document.createElement("select");
let listeBackground = document.createElement("select");
let sizeInput = document.createElement("input");

let colors = ["red", "blue", "green"];
let backgrounds = ["aqua", "darksalmon", "hotpink"];

colors.forEach((color) => {
  let option = document.createElement("option");
  option.textContent = color;
  option.value = color;
  listeCouleur.appendChild(option);
});
backgrounds.forEach((background) => {
  let option1 = document.createElement("option");
  option1.textContent = background;
  option1.value = background;
  listeBackground.appendChild(option1);
});

newP.textContent = "Survolez-moi";
newDiv.appendChild(newP);
document.body.appendChild(newDiv);
// Est ce que cette technique est bien aussi?
// Je ne comprend pas trop la difference entre texteContent et CreateTextNode

// let texteP = document.createTextNode("Survolez-moi");
// newP.appendChild(texteP);
// newDiv.appendChild(newP);
// document.body.appendChild(newDiv);

newP.addEventListener("mouseover", function () {
  newP.style.color = listeCouleur.value;
  newP.style.backgroundColor = listeBackground.value;
  newP.style.fontSize = sizeInput.value + "px";
});
newP.addEventListener("mouseout", function () {
  newP.style.color = "";
  newP.style.backgroundColor = "";
  newP.style.fontSize = "";
});

newP.addEventListener("click", function () {
  newDiv.appendChild(listeCouleur);
  newDiv.appendChild(listeBackground);
  newDiv.appendChild(sizeInput);
});
