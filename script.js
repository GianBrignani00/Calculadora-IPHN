const btnDivision = document.querySelector('#division');
const btnMultiplicacion = document.querySelector('#multiplicacion');
const btnResta = document.querySelector('#resta');
const btnSuma = document.querySelector('#suma');
const btnIgual = document.querySelector('#igual');

//Eventos
const input = document.querySelector('input');

function clearInput() {
    input.value = '';
}

function deleteLastCharacter() {
    input.value = input.value.slice(0, -1);
}

function appendToInput(value) {
    input.value += value;
}

function calculateResult() {
    try {
        input.value = eval(input.value);
    } catch (error) {
        input.value = 'Error';
    }
}

// Eventos de los botones numéricos
const numericButtons = document.querySelectorAll('.btns button:not(.btn-top, .btn-oper)');
numericButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendToInput(button.textContent);
    });
});

// Eventos de los botones de operaciones
btnDivision.addEventListener('click', () => {
    appendToInput('/');
});

btnMultiplicacion.addEventListener('click', () => {
    appendToInput('*');
});

btnResta.addEventListener('click', () => {
    appendToInput('-');
});

btnSuma.addEventListener('click', () => {
    appendToInput('+');
});

// Evento del botón igual
btnIgual.addEventListener('click', () => {
    calculateResult();
});

// Evento del botón AC (clear)
document.querySelector('.btn-top:nth-child(1)').addEventListener('click', () => {
    clearInput();
});

// Evento del botón DEL (delete)
document.querySelector('.btn-top:nth-child(2)').addEventListener('click', () => {
    deleteLastCharacter();
});

// Evento del botón % (percentage)
document.querySelector('.btn-top:nth-child(3)').addEventListener('click', () => {
        calculatePercentage();
});
