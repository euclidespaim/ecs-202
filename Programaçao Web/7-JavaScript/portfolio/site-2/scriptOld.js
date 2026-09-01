const luzVermelha = document.getElementById('luz-vermelha');
const luzAmarela = document.getElementById('luz-amarela');
const luzVerde = document.getElementById('luz-verde');


const btnVermelho = document.getElementById('btn-vermelho');
const btnAmarelo = document.getElementById('btn-amarelo');
const btnVerde = document.getElementById('btn-verde');


btnVermelho.addEventListener('click', function(){
    luzVermelha.style.backgroundColor = 'red'
    luzAmarela.style.backgroundColor = 'black'
    luzVerde.style.backgroundColor = 'black'
})

btnAmarelo.addEventListener('click', function(){
    luzVermelha.style.backgroundColor = 'black'
    luzAmarela.style.backgroundColor = 'yellow'
    luzVerde.style.backgroundColor = 'black'
})

btnVerde.addEventListener('click', function(){
    luzVermelha.style.backgroundColor = 'black'
    luzAmarela.style.backgroundColor = 'black'
    luzVerde.style.backgroundColor = 'green'
})