function convertDeciToHexa(d){
    hexa = parseInt(d, 10).toString(16);
    //console.log(hexa);
    return hexa;
}
document.getElementById("convertird").addEventListener("click", event => {
          decimald = document.getElementById("decimald").value
          hexad = convertDeciToHexa(decimald)
          document.getElementById("hexadecimald").innerHTML = "0x" + hexa
        })
function convertHexaToDeci(h){
            deci = parseInt(h, 16);
            //console.log(h);
            return deci;
        }
document.getElementById("convertirh").addEventListener("click", event => {
          hexah = document.getElementById("hexah").value
          decimalh = convertHexaToDeci(hexah)
          document.getElementById("decimalh").innerHTML = deci
        })
function convertHexaLittleEndienToHexa(h) {
  if (h.substring (0, 2) == "0x")
    h = h.substring (2)
    if (h.length % 2 == 1) {
        h = '0' + h
    }
    let retour = "";
    for (let i = 0; i < h.length - 1; i += 2) {
        retour = h[i] + h[i + 1] + retour;
    }
    return retour;
}
document.getElementById("convertirPE").addEventListener("click", event => {
    hle = document.getElementById("hle").value
    hexa = convertHexaLittleEndienToHexa(hle)
    document.getElementById("hexadecimalPE").innerHTML = "0x" + hexa
})

function convertVarIntToDeci(v){
  if (v.substring (0, 2) == "0x"){
    v= v.substring(2)
  }
  let VarInt = v.substring (0,2);
  let resultat = ""
  console.log(VarInt);
  if (VarInt == "fd" ){
    resultat = v.substring (2,6)
    //console.log(v.substring (2,6));
    resultat = convertHexaLittleEndienToHexa(resultat)
    resultat = convertHexaToDeci(resultat)
  } else if (VarInt == "fe"){
    resultat = v.substring (2,10)
    resultat = convertHexaLittleEndienToHexa(resultat)
    resultat = convertHexaToDeci(resultat)
  } else if (VarInt == "ff"){
    resultat = v.substring (2,18)
    resultat = convertHexaLittleEndienToHexa(resultat)
    resultat = convertHexaToDeci(resultat)
  } else {
    resultat = convertHexaLittleEndienToHexa(v)
    resultat = convertHexaToDeci(resultat)
  }
  //console.log(resultat);
  return resultat
}
document.getElementById("convertirV").addEventListener("click", event => {
    varintv = document.getElementById("VarIntV").value
    varinRV = convertVarIntToDeci(varintv)
    document.getElementById("decimalV").innerHTML = varinRV
})
