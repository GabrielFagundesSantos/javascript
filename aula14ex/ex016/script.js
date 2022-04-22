
function contar(){
    var numini = window.document.getElementById('numini')
    var numfim = window.document.getElementById('numfim')
    var pas = window.document.getElementById('passo')
    var res = window.document.querySelector('div#res')
    var inicio = Number(numini.value)
    var fim = Number(numfim.value)
    var passo = Number(pas.value)
    
    if (numini.value.length == 0 || numfim.value.length == 0 || pas.value.length == 0){
        window.alert('Favor preencher os campos')
    }else {
            for(var g = inicio; g <= fim; g += passo){
                res.innerHTML = g
                
            }
            
        }
 
    }    
    