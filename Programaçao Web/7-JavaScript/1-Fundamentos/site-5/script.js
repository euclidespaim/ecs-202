const likes = document.getElementById("likes")
const botao = document.getElementById("btn")

let controle = 0;

botao.addEventListener('click', function(){
    controle = controle + 1;
    
    likes.innerHTML = controle
})