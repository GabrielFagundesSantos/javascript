let num = [5,2,9,7]
num.push(1)
num.sort()
console.log(`Valores do vetor: ${num}`)

let pos = num.indexOf(8)
if (pos == -1){
    console.log('Valor não encontrado')
}else{
    console.log(`O valor 5 está na posição ${pos}`)
}
