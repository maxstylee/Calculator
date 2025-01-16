function adjustFontSize() {
    var screen = document.getElementById('screen');
    var full = screen.value.length;

    // if (full >= (number) && screen.value.indexOf("\n") === -1) {
    //     screen.value += '\n'; 
    // }
    // Adjust font size based on length
    if (full >= 20) {
        screen.style.fontSize = '20px';  
    }  else {
        screen.style.fontSize = '';  
    }
}


document.getElementById('screen').addEventListener('input', adjustFontSize);
document.querySelectorAll('[id^="n"], [id="null"]').forEach(function (button) {
    button.addEventListener('click', function () {
        var buttonValue = this.textContent;
        var inputField = document.getElementById('screen');
        var currentValue = inputField.value;

        if (/[y]$/.test(currentValue)) {

            inputField.value = '' + buttonValue;
        }
        else if (/[.]$/.test(currentValue) === ".") {
            currentValue = inputField.value + "0"
        }
        else if (currentValue.charAt(0) === '0' && currentValue.length === 1) {
            inputField.value = buttonValue;

        }
        else {
            inputField.value = currentValue + buttonValue;
        }
        adjustFontSize();
    });
});

document.getElementById('null').addEventListener('click', function () {
    var buttonValue = this.textContent;
    var inputField = document.getElementById('screen');
    var currentValue = inputField.value;

    if (currentValue.charAt(0) === '0' && currentValue.length === 1) {
        inputField.value = "0" + ".";
    } else {
        currentValue = buttonValue + currentValue;
    }

    adjustFontSize();
});


document.getElementById('equ').addEventListener('click', function () {
    var buttonValue = this.textContent;
    var currentValue = document.getElementById('screen').value;

    try {
        var result = eval(currentValue);
        if (!isNaN(result)) {
            document.getElementById('screen').value = result;
        }
        else (/[+\-.*/=]$/.test(currentValue)); {
            return;
        }

    } catch (e) {

        return;
    }
});

document.querySelectorAll('[id="minus"],[id="plus"],[id="slash"],[id="multiply"]').forEach(function (button) {
    button.addEventListener('click', function () {
        var buttonValue = this.textContent;
        var currentValue = document.getElementById('screen').value;

        if (/[y]$/.test(currentValue)) {
            inputField.value = '' + buttonValue;
        }

        if (currentValue === '' && ['+', '/', '*'].includes(buttonValue)) {
            return;
        }
        if (/[*+\-.*/=]$/.test(currentValue)) {
            document.getElementById('screen').value = currentValue.slice(0, -1) + buttonValue;
        }
        else {
            document.getElementById('screen').value = currentValue + buttonValue;
        }
        adjustFontSize();
    })
});

document.querySelectorAll('#plus, #slash').forEach(button => {
    button.addEventListener('click', validateInput);
});

function validateInput() {
    const inputElement = document.getElementById('screen');
    const inputValue = inputElement.value;

    if (inputValue.startsWith('+')) {
        inputElement.value = '';
    }
    adjustFontSize();
};

function validateExpression(expression) {
    
    const operators = /[\+\-\*\/=]/;
    const parts = expression.split(operators);

    
    for (let part of parts) {
        if (part === '') continue;
        if (!/^\d+(\.\d+)?$/.test(part)) {
            return false;
        }
    }
    return true; 
}

document.getElementById('point').addEventListener('click', function () {
    var inputField = document.getElementById("screen");
    var currentValue = inputField.value;
    var buttonValue = this.textContent;

    if (/[y]$/.test(currentValue)) {
        inputField.value = '' + buttonValue;
    }

    // if (currentValue.includes('.')) {
    //     return;
    // }
    if (/[+\-*/=]$/.test(currentValue)) {
        inputField.value = currentValue + '0' + buttonValue;
    }
    else if (currentValue === '' || ['+', '/'].includes(buttonValue)) {
        inputField.value = currentValue + '0' + buttonValue;
    }
    else if (/[.]$/.test(currentValue)) {
        return;
    }
    else {
        inputField.value = currentValue + buttonValue;
    }
    adjustFontSize();
});

document.getElementById('del').addEventListener('click', function () {
    var inputField = document.getElementById("screen");
    var currentValue = inputField.value;
    if (/[+\-*/=]$/.test(currentValue)) {
        inputField.value = currentValue.slice(0, -2);
    }
    else if (currentValue !== "") {
        inputField.value = currentValue.slice(0, -1);
    }
    adjustFontSize();
});

document.getElementById('reset').addEventListener('click', function () {
    var inputField = document.getElementById("screen");
    var currentValue = inputField.value;
    if (currentValue !== '') {
        inputField.value = '';
    }
    adjustFontSize();

});

