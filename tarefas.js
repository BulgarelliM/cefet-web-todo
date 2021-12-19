// Atividade 0

let tarefas = [];

function Tarefa(nome, categoria, realizada) {
    this.nome = nome; // texto da tarefa
    this.categoria = categoria; // nome da categoria: "lazer", "compras" ou "estudos"
    this.realizada = realizada; // booleano indicando se já foi cumprida
}

let tarefaX = new Tarefa('Comprar leite', 'compras', false);
let tarefaY = new Tarefa('Escutar chimbinha', 'lazer', true);

tarefas.push(tarefaX);
tarefas.push(tarefaY);

let containerElemento = document.querySelector('ul#lista-tarefas');
// Diretrizes em:https://fegemo.github.io/cefet-front-end/classes/js4/#remocao-de-elementos
containerElemento.innerHTML='';

// Diretrizes em: https://fegemo.github.io/cefet-front-end/classes/js4/#16
function insereTarefaNaPagina(obj){
    let elementoTarefa = document.createElement('li');

    elementoTarefa.innerHTML = obj.nome;
    elementoTarefa.classList.add('item-tarefa'); // Adiciona a classe item-tarefa
    elementoTarefa.classList.add(`categoria-${obj.categoria}`);

    // Verifica se esta realizada:
    if (obj.realizada){
        elementoTarefa.classList.add('marcado');
    }

    containerElemento.appendChild(elementoTarefa);
}

tarefas.forEach(insereTarefaNaPagina);

// ---------------------------------------------------------------------
// Atividade 2
let incluiTarefaElemento = document.querySelector('#incluir-nova-tarefa');

incluiTarefaElemento.addEventListener('click', function(event) {
    let tarefaTxt = document.querySelector('#nova-tarefa-nome');
    let selecaoDrop = document.querySelector('#nova-tarefa-categoria');
    let tarefaNova = new Tarefa(tarefaTxt.value, selecaoDrop.value, false);
    tarefas.push(tarefaNova);
    insereTarefaNaPagina(tarefaNova);
    tarefaTxt.value='';
    tarefaTxt.focus();
});
