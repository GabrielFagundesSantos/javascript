/*ini = 10
fim = 1
passo = 1
if (ini < fim){
    while(ini <= fim){
        console.log(`Passo ${ini}`)
        ini += passo
    }
}else{
    while(ini >= fim){
        console.log(`Passo ${ini}`)
        ini -= passo 
    }
}*/

function contar(){
    let numini = window.document.getElementById('numini')
    let numfim = window.document.getElementById('numfim')
    let pas = window.document.getElementById('passo')
    let res = window.document.querySelector('div#res')
    
    
    if (numini.value.length == 0 || numfim.value.length == 0 || pas.value.length == 0){
        res.innerHTML = 'Impossível contar'
    }
    else {
        res.innerHTML = 'Contando: <br>'
        var inicio = Number(numini.value)
        var fim = Number(numfim.value)
        var passo = Number(pas.value)
        if (passo <= 0){
            window.alert('Passo inválido. Considerando passo = 1')
            passo = 1
        }
        if (inicio < fim){
        for(let c = inicio; c <= fim; c += passo){
            res.innerHTML += `${c} \u{1F449}`
        } 
        }else{
            for(let c = inicio; c >= fim; c -= passo){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
    }res.innerHTML += `\u{1F3C1}` 
}
  
    