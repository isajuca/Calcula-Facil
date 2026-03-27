// =================================================================================
//  Aumento Salarial
//  Autor: Isadora Jucá
//  Objetivo: calcular o aumento salarial de um funcionário, 
// considerando o salário atual e o percentual de aumento.
// =================================================================================

// -------------------------------------
// 1. Selecionar os elementos da página
// -------------------------------------
const salarioAtualInput = document.getElementById('salario-atual');
const calcularAumentoBtn = document.getElementById('calcular-aumento');
const resultadoAumentoDiv = document.getElementById('resultado-aumento');
const backButton = document.getElementById('backButton');
const dateTime = document.getElementById('dateTime');

function updateDateTime() {
    const now = new Date();
    dateTime.textContent = now.toLocaleString('pt-BR');
}
setInterval(updateDateTime, 1000);
updateDateTime();

backButton.addEventListener('click', () => window.history.back());

// -----------------------------------------------------
// 2. Função para calcular o novo salário com o aumento
// -----------------------------------------------------
function calcularAumento(salarioAtual, percentualAumento) {
    if (salarioAtual <= 1200) {
        percentualAumento = 0.16;
    }
    else if (salarioAtual > 1200.01 && salarioAtual <= 2100) {
        percentualAumento = 0.13;
    }
    else if (salarioAtual > 2100.01 && salarioAtual <= 3000) {
        percentualAumento = 0.10;
    }
    else {
        percentualAumento = 0.05;
    }
    const aumento = salarioAtual * percentualAumento;
    const novoSalario = salarioAtual + aumento;
    return aumento.toFixed(2) + '|' + novoSalario.toFixed(2);
}

// -----------------------------------------
// 3. Adicionar um evento ao botão calcular
// -----------------------------------------
calcularAumentoBtn.addEventListener('click', function() {
    const salarioAtual = parseFloat(salarioAtualInput.value);

    if (isNaN(salarioAtual)) {
        resultadoAumentoDiv.innerHTML = '<p style="color: red;">Por favor, preencha o campo de salário corretamente!</p>';
        return;
    }
    const resultado = calcularAumento(salarioAtual);
    const [aumento, novoSalario] = resultado.split('|');
    resultadoAumentoDiv.innerHTML = `<p>Aumento: R$ ${aumento}</p><p>Novo Salário: R$ ${novoSalario}</p>`;
}); 
