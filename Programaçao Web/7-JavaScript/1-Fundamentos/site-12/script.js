const btnRegistrar = document.getElementById("btn-registrar");
const telaTerminal = document.getElementById("tela-terminal");

btnRegistrar.addEventListener('click', function(){

    const novoItem = document.createElement('p');

    novoItem.textContent = "Acesso autorizado detectado."

    telaTerminal.appendChild(novoItem);

    novoItem.classList.add('linha-log')

})