ini = 1
fim = 10
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
}




/*
function contar(){
    var numini = window.document.getElementById('numini')
    var numfim = window.document.getElementById('numfim')
    var pas = window.document.getElementById('passo')
    var res = window.document.querySelector('section#res')
    var inicio = Number(numini.value)
    var fim = Number(numfim.value)
    var passo = Number(pas.value)
    
    if (numini.value.length == 0 || numfim.value.length == 0 || pas.value.length == 0){
        window.alert('Favor preencher os campos')
    }else {
            while(inicio <= fim){
                res.innerHTML += inicio
                inicio += passo
            }
            
        }
 
    }  */ 
    