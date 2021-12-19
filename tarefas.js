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
