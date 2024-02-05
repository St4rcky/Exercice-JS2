let bouton = document.querySelector("button");
let input = document.querySelectorAll("input");
let message = document.getElementById("faux");

bouton.addEventListener("click", function (e) {
  e.preventDefault();
  //on en a parlé pdt le cours, j'ai du utiliser queryselector sur une classe a la place de getelement
  //j'ai appris ensuite que je pouvais utiliser [0] apres le getelementbyid
  let nom = document.querySelector("#nom").value;
  let prenom = document.querySelector("#prenom").value;
  console.log(nom);
  for (let champ of input) {
    if (champ.value === "") {
      message.textContent = "Tous les champs doivent être remplis";
      message.style.color = "red";
      break;
    } else if (
      !/^[a-zA-ZÀ-ÖØ-öø-ÿ- ]+$/.test(nom) ||
      !/^[a-zA-ZÀ-ÖØ-öø-ÿ- ]+$/.test(prenom)
    ) {
      message.textContent = "Veuillez rentrer un nom valide";
      message.style.color = "red";
      break;
    } else {
      message.textContent = "Le formulaire a été soumis avec succès !";
      message.style.color = "green";
    }
  }
});
