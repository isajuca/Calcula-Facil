// =================================================================================
//  Horas Extras 
//  Autor: Isadora Jucá
//  Objetivo: calcular o valor das horas extras de um funcionário, 
// considerando o salário mensal e a quantidade de horas extras trabalhadas.
// =================================================================================

// -------------------------------------
// 1. Selecionar os elementos da página
// -------------------------------------
const salarioInput = document.getElementById('salario');
const horasExtrasInput = document.getElementById('horas-extras');
const horasExtrasFDSInput = document.getElementById('horas-extras-fds');
const calcularBtn = document.getElementById('calcular');
const resultadoDiv = document.getElementById('resultado');
const backButton = document.getElementById('backButton');
const dateTime = document.getElementById('dateTime');

function updateDateTime() {
    const now = new Date();
    dateTime.textContent = now.toLocaleString('pt-BR');
}
setInterval(updateDateTime, 1000);
updateDateTime();

backButton.addEventListener('click', () => window.history.back());

// ------------------------------------------------------------------
// 2. Função para calcular o valor das horas extras e o novo salário
// ------------------------------------------------------------------
function horasExtras(salario, horasExtras, horasExtrasFDS) {
    const valorHora = salario / 200;
    const valorHoraExtra = valorHora * 1.5;
    const valorHoraExtraFDS = valorHora * 2;
    const acrescimo = (horasExtras * valorHoraExtra) + (horasExtrasFDS * valorHoraExtraFDS);
    const novoSalario = salario + acrescimo;
    return acrescimo.toFixed(2) + '|' + novoSalario.toFixed(2); 
}

// -----------------------------------------
// 3. Adicionar um evento ao botão calcular
// -----------------------------------------
calcularBtn.addEventListener('click', function() {
    const salario = parseFloat(salarioInput.value);
    const horas = parseFloat(horasExtrasInput.value);
    const horasFDS = parseFloat(horasExtrasFDSInput.value);

    if (isNaN(salario) || isNaN(horas) || isNaN(horasFDS)) {
        resultadoDiv.innerHTML = '<p style="color: red;">Por favor, preencha todos os campos corretamente!</p>';
        return;
    }

    const resultado = horasExtras(salario, horas, horasFDS);
    const [acrescimo, novoSalario] = resultado.split('|');
    resultadoDiv.innerHTML = `<p>Acréscimo: R$ ${acrescimo}</p><p>Novo Salário: R$ ${novoSalario}</p>`;
});