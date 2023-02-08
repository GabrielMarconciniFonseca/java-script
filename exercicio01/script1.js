function carregar(){
    var msg = window.DocumentElementById('msg')
    var img = window.DocumentElementById('imagem')
    var data = new Date()
    var hora =data.getHours()

    msg.innerHTML =`Agora são ${hora} horas`
    
    if(hora >= 0 && hora < 12){
        img.src = 'manha.png'
    }else if (hora >= 12 && hora < 18){
        img.src = 'tarde.avif'
    }else {
        img.src = '[noite.avif'
        document.body.style.background ='#515154'
    }
}