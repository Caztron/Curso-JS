function carregar() {
var msg = window.document.querySelector('div#msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minute = data.getMinutes()

msg.innerHTML = `Agora são ${hora}:${minute} horas`
    if (hora >= 6 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.background = '#F2BF91'
        msg.innerHTML += (', bom dia!')
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#614D34'
        msg.innerHTML += (', boa tarde!')
    }  else if (hora >= 0 && hora < 6) {
        img.src = 'imagens/madrugada.png'
        document.body.style.background = 'black'
        msg.innerHTML += (', boa madrugada!')
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#1C2611'
        msg.innerHTML += (', boa noite!')
    }
}