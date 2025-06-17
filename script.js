let display = document.getElementById('display');
let historyList = document.getElementById('history-list');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(display.value);
        let expression = display.value + ' = ' + result;
        display.value = result;
        updateHistory(expression);
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500);
    }
}

function updateHistory(expression) {
    if (expression) {
        let historyItem = document.createElement('p');
        historyItem.textContent = expression;
        historyList.appendChild(historyItem);
        historyList.scrollTop = historyList.scrollHeight;
    }
}

function clearHistory() {
    historyList.innerHTML = '';
}

document.addEventListener('keydown', function(event) {
    let key = event.key;
    if (/[0-9]/.test(key)) appendToDisplay(key);
    else if (key === '.') appendToDisplay('.');
    else if (key === '+') appendToDisplay('+');
    else if (key === '-') appendToDisplay('-');
    else if (key === '*') appendToDisplay('*');
    else if (key === '/') appendToDisplay('/');
    else if (key === '%') appendToDisplay('%');
    else if (key === 'Enter' || key === '=') calculate();
    else if (key === 'Backspace') backspace();
    else if (key === 'Escape') clearDisplay();
});