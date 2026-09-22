const mensagem = document.getElementById("mensagem")
const botao = document.getElementById("btn")

botao.addEventListener('click', function() {

    mensagem.textContent = "Olá Turma 202! O JavaScript chegou!!"
    window.alert("Botão acionado!")

})