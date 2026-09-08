const inputTarefa = document.getElementById("input-tarefa");
const btnAdicionar = document.getElementById("btn-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");


btnAdicionar.addEventListener('click', function(){
    
    if (inputTarefa.value !== ""){
        
        const novoItem = document.createElement('li');
        novoItem.textContent = inputTarefa.value;

        listaTarefas.appendChild(novoItem);
            
        inputTarefa.value = "";
        inputTarefa.focus();
    }
})


inputTarefa.addEventListener('keyup', function(event){

    console.log(event.key)

    if (inputTarefa.value !== "" & event.key === "Enter"){

        const novoItem = document.createElement('li');
        novoItem.textContent = inputTarefa.value;

        listaTarefas.appendChild(novoItem);
            
        inputTarefa.value = "";
        inputTarefa.focus();

    }

})
