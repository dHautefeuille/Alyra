function nombreEfficace()
{

  function nombrePropose()
  {
    var solution = parseInt(prompt('Sélectioner un nombre entre 1 et 100'));
    return solution;
    console.log("Le résultat de Solution est: " + solution);
  }

  function aleatoirNombre(min, max)
  {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  var Array = [];
  var AN = aleatoirNombre('0','101')
  var NP = nombrePropose()
  console.log("le nombre est" + NP + "l'autre" + AN);

  while (NP != AN)
  {
    if (NP > 100){
    var NP = nombrePropose()
  }
    if (NP >= '0') {
    var AN = aleatoirNombre('0','50')
    Array.push(AN);
  }
    if (NP >= '10') {
    var AN = aleatoirNombre('10','50')
    Array.push(AN);
  }
    if (NP >= '20') {
    var AN = aleatoirNombre('20','50')
    Array.push(AN);
  }
    if (NP >= '30') {
    var AN = aleatoirNombre('30','50')
    Array.push(AN);
  }
    if (NP >= '40') {
    var AN = aleatoirNombre('40','50')
    Array.push(AN);
  }

  if (NP >= '90') {
  var AN = aleatoirNombre('90','101')
  Array.push(AN);
}
  if (NP >= '80') {
  var AN = aleatoirNombre('80','101')
  Array.push(AN);
}
  if (NP >= '70') {
  var AN = aleatoirNombre('70','101')
  Array.push(AN);
}
  if (NP >= '60') {
  var AN = aleatoirNombre('60','101')
  Array.push(AN);
}
  if (NP >= '50') {
  var AN = aleatoirNombre('50','101')
  Array.push(AN);
}

}

  console.log(Array);
  alert("Bravo");
}
