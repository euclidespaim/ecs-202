const campoNome = document.getElementById("campo-nome")
const mensagem = document.getElementById("mensagem")
const botao = document.getElementById("btn")


botao.addEventListener('click', function(){

    let nome = campoNome.value;
    mensagem.textContent = "Seja muito bem vindo " + nome + "!"

    campoNome.value = "";
})


