const nave = document.getElementById("nave");

let posicaoX = 180;
let posicaoY = 180;


document.addEventListener('keydown', function (evento) {

    console.log("A tecla apertada foi: " + evento.key);

    if (evento.key === "ArrowUp") {
        posicaoY = posicaoY - 20;
    }
    else if (evento.key === 'ArrowDown') {
        posicaoY = posicaoY + 20; // Desce
    }
    else if (evento.key === 'ArrowLeft') {
        posicaoX = posicaoX - 20; // Vai pra esquerda
    }
    else if (evento.key === 'ArrowRight') {
        posicaoX = posicaoX + 20; // Vai pra direita
    }


    nave.style.top = posicaoY + 'px';
    nave.style.left = posicaoX + 'px';

})