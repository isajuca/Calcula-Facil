// =================================================================================
//  Calculo de Frete
//  Autor: Isadora Jucá
//  Objetivo: calcular o valor do frete para uma entrega,
// considerando a quantidade de funcionarios e a quantidade de dias.
// =================================================================================

// -------------------------------------
// 1. Selecionar os elementos da página
// -------------------------------------
const quantidadeFuncionariosInput = document.getElementById('quantidade-funcionarios');
const quantidadeDiasInput = document.getElementById('quantidade-dias');
const calcularFreteBtn = document.getElementById('calculate');
const resultadoFreteDiv = document.getElementById('result');
const backButton = document.getElementById('backButton');
const dateTime = document.getElementById('dateTime');

function updateDateTime() {
    const now = new Date();
    dateTime.textContent = now.toLocaleString('pt-BR');
}
setInterval(updateDateTime, 1000);
updateDateTime();

backButton.addEventListener('click', () => window.history.back());

// --------------------------------
// 2. Função para calcular o frete
// --------------------------------
function calcularFrete(quantidadeFuncionarios, quantidadeDias) {
    let valorPorPessoa = 0;

    if (quantidadeFuncionarios >= 1 && quantidadeFuncionarios <= 49) {
        valorPorPessoa = 4.5;
    } else if (quantidadeFuncionarios >= 50 && quantidadeFuncionarios <= 99) {
        valorPorPessoa = 4.1;
    } else if (quantidadeFuncionarios >= 100 && quantidadeFuncionarios <= 149) {
        valorPorPessoa = 3.8;
    } else if (quantidadeFuncionarios >= 150) {
        valorPorPessoa = 3.6;
    } else {
        return { erro: 'Quantidade de funcionários deve ser maior que 0.' };
    }

    const custoTotal = quantidadeFuncionarios * quantidadeDias * valorPorPessoa;
    return {
        valorPorPessoa,
        custoTotal,
    };
}

// --------------------------------
// 3. Eventos de interação
// --------------------------------
calcularFreteBtn.addEventListener('click', () => {
    const quantidadeFuncionarios = Number(quantidadeFuncionariosInput.value);
    const quantidadeDias = Number(quantidadeDiasInput.value);

    if (!quantidadeFuncionarios || quantidadeFuncionarios <= 0) {
        resultadoFreteDiv.textContent = 'Informe uma quantidade de funcionários válida (maior que 0).';
        return;
    }

    if (!quantidadeDias || quantidadeDias <= 0) {
        resultadoFreteDiv.textContent = 'Informe uma quantidade de dias válida (maior que 0).';
        return;
    }

    const resultado = calcularFrete(quantidadeFuncionarios, quantidadeDias);

    if (resultado.erro) {
        resultadoFreteDiv.textContent = resultado.erro;
        return;
    }

    resultadoFreteDiv.innerHTML = `
        <p>Funcionários: <strong>${quantidadeFuncionarios}</strong></p>
        <p>Dias úteis: <strong>${quantidadeDias}</strong></p>
        <p>Valor por pessoa/dia: <strong>R$ ${resultado.valorPorPessoa.toFixed(2)}</strong></p>
        <p>Custo mensal total: <strong>R$ ${resultado.custoTotal.toFixed(2)}</strong></p>
    `;
});