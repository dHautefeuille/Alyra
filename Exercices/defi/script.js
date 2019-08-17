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
            document.getElementById("decimalPE").innerHTML = parseInt(hexa, 16)

        })
