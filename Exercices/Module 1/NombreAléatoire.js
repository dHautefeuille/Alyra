//Exercice 1.1.1: Trouver un nombre aléatoire
//Lien: https://ecole.alyra.fr/mod/assign/view.php?id=35
function nombreAleatoire()
{
  //Genérateur de nombre entier entre 0 et 100
  var gNb = Math.floor(Math.random() * 101);
  console.log("Le résultat aléatoir est: " + gNb);

  var nbPropose = parseInt(prompt('Sélectioner un nombre entre 1 et 100'));
  console.log("Le résultat fournit est: " + nbPropose);

  var result = false;

  while (result != true) {

    if (gNb === nbPropose) {
      alert("Bravo ! Les nombres sont exacts");
      var result = true;

    } else if (nbPropose > gNb) {
      var nbPropose = parseInt(prompt("Le nombre est inférieur au tiens"));
      var result = false;

    } else if (nbPropose < gNb) {
      var nbPropose = parseInt(prompt("Le nombre est supérieur au tiens"));
      var result = false;

    } else {
      alert("Tu peux recommencer le jeu");
      var result = true;
    }
    console.log("Resultat est " + result);
  }
}
