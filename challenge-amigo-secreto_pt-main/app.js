// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // Remove espaços extras

    // Validação: campo não pode estar vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array
    amigos.push(nome);

    // Limpa o campo de entrada
    input.value = "";

    // Atualiza a exibição da lista de amigos
    atualizarLista();
}

// Função para atualizar a exibição da lista de amigos
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");

    // Limpa a lista antes de atualizar
    lista.innerHTML = "";

    // Percorre o array de amigos e adiciona cada um à lista
    for (let amigo of amigos) {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    }
}

// Função para sortear um amigo aleatoriamente
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    // Validação: verificar se há amigos na lista
    if (amigos.length === 0) {
        resultado.innerHTML = "Nenhum amigo disponível para sorteio.";
        return;
    }

    // Gerar um índice aleatório
    let indiceSorteado = Math.floor(Math.random() * amigos.length);

    // Exibir o nome sorteado
    resultado.innerHTML = `Amigo sorteado: <strong>${amigos[indiceSorteado]}</strong>`;
}
