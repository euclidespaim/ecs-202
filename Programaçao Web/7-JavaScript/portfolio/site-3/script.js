
// 1. Selecionando o rosto do robô
const robo = document.getElementById('rosto-robo');

// 2. Selecionando os botões
const btnCarinho = document.getElementById('btn-carinho');
const btnBronca = document.getElementById('btn-bronca');
const btnDormir = document.getElementById('btn-dormir');

// 3. Ação: Fazer Carinho
btnCarinho.addEventListener('click', function () {
    robo.style.backgroundColor = 'pink';
    robo.textContent = '( ^_^ )';
});

// 4. Ação: Dar Bronca
btnBronca.addEventListener('click', function () {
    robo.style.backgroundColor = 'red';
    robo.textContent = '( >_< )';
});

// 5. Ação: Dormir
btnDormir.addEventListener('click', function () {
    robo.style.backgroundColor = 'darkblue';
    robo.textContent = '( -_- ) zZz';
});
