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
    let tab = window.document.getElementById('seltab')
    if (txttab.value.length == 0){
        window.alert('Valor inválido')
        tab.innerHTML = 'TESTE'
    } else{
        let valor = Number(txttab.value)
        let conta = 0
        tab.innerHTML = ''
        while(conta <= 10){
            let item = document.createElement('option')
            Total = valor * conta
            item.text = `${conta} x ${valor} = ${Total}` 
            item.value = `tab${conta}`
            tab.appendChild(item)
            conta++
        }
    }
}