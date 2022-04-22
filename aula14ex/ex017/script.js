// Tabuada de exemplo
/*
var tab = 3
var conta = 0
while (conta <= 10){
    rec = tab * conta
    console.log(`${tab} x ${conta} = ${rec}`)
    conta++
}
*/

function Calcula(){
    var txttab = window.document.getElementById('txttab')
    var valor = Number(txttab.value)
    var res = window.document.getElementById('res')
    if (txttab.value.length == 0){
        window.alert('Valor inválido')
    } else{
        conta = 0
        while(conta <= 10){
            Total = valor * conta
            res.innerHTML += `${conta} x ${valor} = ${Total}<br>` 
            conta++
        }
    }
}