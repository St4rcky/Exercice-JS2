let bouton = document.querySelector("button");
let input = document.querySelectorAll("input");
let message = document.getElementById("faux");

bouton.addEventListener("click", function (e) {
  e.preventDefault();
  //On en a parlé pdt le cours, j'ai du utiliser querySelector sur une id à la place de getElement
  //j'ai appris ensuite que je pouvais utiliser [0] apres le getElementById, je ne connaissais pas.
  let nom = document.querySelector("#nom").value;
  let prenom = document.querySelector("#prenom").value;
  let date = document.querySelector("#birth").value;
  let mail = document.querySelector("#mail").value;
  let telephone = document.querySelector("#telephone").value;
  //   console.log(nom);
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
    } else if (
      !/^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[0-2])\/(19\d{2}|20(?:0\d|1[0-9]|2[0-4]))$/.test(
        date
      )
    ) {
      message.textContent = "Veuillez rentrer une date de naissance valide";
      message.style.color = "red";
      break;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.[a-z]{2,3})+$/.test(mail)) {
      message.textContent = "Veuillez rentrer une adresse mail valide";
      message.style.color = "red";
    } else if (!/^([0-9]{10})+$/.test(telephone)) {
      message.textContent =
        "Veuillez rentrer un numero de telephone valide en France";
      message.style.color = "red";
    } else {
      message.textContent = "Le formulaire a été soumis avec succès !";
      message.style.color = "green";
    }
  }
});
