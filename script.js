// script.js

// Inicializa o valor do contador
let contador = 0;

// Seleciona o elemento onde o valor será exibido
const contadorElement = document.getElementById('contador');

// Função para atualizar o valor do contador
function atualizarContador() {
    contador++; // Aumenta o valor do contador
    contadorElement.textContent = contador; // Atualiza o texto no elemento
}

// Atualiza o contador automaticamente a cada 1 segundo (1000 milissegundos)
setInterval(atualizarContador, 1000);

function alerthello() {
    alert("Clique no Link abaixo para entrar na pagina de preenchimento do formulario");
}