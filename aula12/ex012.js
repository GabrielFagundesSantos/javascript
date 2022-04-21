var horaAtual = new Date()
var hora = horaAtual.getHours()
console.log(`O horário de agora é ${hora} horas.`)
if (hora >= 6 && hora < 12){
    console.log('Bom dia')
}
else if (hora <= 18){
    console.log('Boa tarde')
}else
    console.log('Boa noite')
