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
    let txttab = window.document.getElementById('txttab')
    let valor = Number(txttab.value)
    let res = window.document.getElementById('res')
    res.innerHTML = 'Calculando: <br>'
    if (txttab.value.length == 0){
        window.alert('Valor inválido')
        res.innerHTML = 'Aguardando valor válido'
    } else{
        conta = 0
        while(conta <= 10){
            Total = valor * conta
            res.innerHTML += `${conta} x ${valor} = ${Total}<br>` 
            conta++
        }
    }
}