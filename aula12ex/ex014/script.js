function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var msgB = window.document.getElementById('msgB')
    data = new Date()
    hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} Horas.`  
    if (hora >=0 && hora < 12){
        // Bom dia
        img.src = 'manha.png'
        document.body.style.background = '#e7c768'
        msgB.innerHTML = 'Bom dia!'
    }else if (hora >= 12 && hora <= 18){
        // Boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#df8b72'
        msgB.innerHTML = 'Boa tarde!'
    }else {
        //Boa noite
        img.src = 'noite.png'
        document.body.style.background = '#2f464c'
        msgB.innerHTML = 'Boa noite!'
    }
}
