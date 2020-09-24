

function mudarBg() {
    var data = new Date()
    var hora = data.getHours()

    var name = document.getElementById('meunome')

    if (hora >= 0 && hora < 12) {
        //DIA
        document.body.style.background = "url('/img/banner/bgdia.jpg')"
        name.style.color = '#333'
    } else if (hora >=12 && hora < 18) {
        //TARDE
        document.body.style.background = "url('/img/banner/bgtarde.jpg')"
    } else {
        //NOITE
        document.body.style.background = "url('/img/banner/bgnoite.jpg')"
    }
}