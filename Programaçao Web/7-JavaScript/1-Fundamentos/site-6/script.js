
const titiulo = document.getElementById("titulo")
const lampada = document.getElementById("lampada")
const ligar = document.getElementById("ligar")
const desligar = document.getElementById("desligar")


ligar.addEventListener('click', function() {
    lampada.src = "img/acesa.png";
    document.getElementsByTagName('body')[0].style.backgroundColor = "white";
    titiulo.style.color = "black"
})

desligar.addEventListener('click', function(){
    lampada.src = "img/apagada.png";
    document.getElementsByTagName('body')[0].style.backgroundColor = "black";
    titiulo.style.color = "white"
})

