// Obtém o formulário e a área onde o resultado será exibido
const form = document.getElementById('form');
const resultDiv = document.getElementById('result');

// Adiciona um evento de envio ao formulário
form.addEventListener("submit", function(event) {
    // Previne o comportamento padrão do formulário (envio e recarregamento da página)
    event.preventDefault();

    // Obtém os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const turma = document.getElementById('turma').value;

    // Exibe os resultados
    resultDiv.innerHTML = `<p><strong>Nome:</strong> ${nome}</p>
                           <p><strong>Idade:</strong> ${idade}</p>
                           <p><strong>Turma:</strong> ${turma}</p>`;
});