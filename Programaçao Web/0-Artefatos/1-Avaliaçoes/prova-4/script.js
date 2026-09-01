// 1. Seleção dos elementos no DOM
const painel = document.getElementById('visor');
const btnLiberar = document.getElementById('btn-liberar');
const btnBloquear = document.getElementById('btn-bloquear');

// 2. Evento: Mouse entra no painel
painel.addEventListener('mouseenter', function () {
    painel.style.backgroundColor = 'orange';
    painel.textContent = 'Aguardando Senha...';
});

// 3. Evento: Mouse sai do painel
painel.addEventListener('mouseleave', function () {
    painel.style.backgroundColor = 'gray';
    painel.textContent = 'Sistema Ativo';
});

// 4. Evento: Clique no botão Liberar
btnLiberar.addEventListener('click', function () {
    painel.style.backgroundColor = 'green';
    painel.textContent = 'Acesso Liberado';
});

// 5. Evento: Clique no botão Bloquear
btnBloquear.addEventListener('click', function () {
    painel.style.backgroundColor = 'red';
    painel.textContent = 'Acesso Bloqueado!';
})