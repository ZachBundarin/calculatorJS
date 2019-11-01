//global variable 'i' to keep track of which parenthesis needs to be added.
var i = 0;

//this function gets the number button pressed and adds it to the input string.
function getNumber(num) {
    var input = document.getElementById('input');
    switch(num) {
        case 1:
            input.value += '1'; 
            break;
        case 2:
            input.value += '2'; 
            break;
        case 3:
            input.value += '3'; 
            break;
        case 4:
            input.value += '4'; 
            break;
        case 5:
            input.value += '5'; 
            break;
        case 6:
            input.value += '6'; 
            break;
        case 7:
            input.value += '7'; 
            break;
        case 8:
            input.value += '8'; 
            break;
        case 9:
            input.value += '9'; 
            break;
        case 0:
            input.value += '0'; 
            break;
            
    }
}

//this function clears both input and result screens along with resetting the global variable 'i'.
function clearScreen() {
    var input = document.getElementById('input');
    var result = document.getElementById('result');
    input.value = '';
    result.value = '';
    i = 0;
}

//this function gets the operand button pressed and adds it to the input string.
function getOperand(operand) {
    var input = document.getElementById('input');
    switch(operand) {
        case '+':
            input.value += '+';
            break;
        case '-':
            input.value += '-';
            break;
        case 'x':
            input.value += '*';
            break;
        case '/':
            input.value += '/';
            break;
    }
}

//this function removes the last index of the input string working as a backspace feature.
function backspace() {
    var input = document.getElementById('input');
    if(input.value.length > 0) {
        input.value = input.value.substring(0,input.value.length-1);
    }
}

//this function adds the correct parenthesis to the input string.
function brackets() {
    var input = document.getElementById('input');
    if(i == 0) {
        input.value +='(';
        i = 1;
    }else{
        input.value +=')';
        i = 0;
    }
}

//this function takes the input string, computes it, then stores the result in the result string.
function compute() {
    var input = document.getElementById('input');
    var resultToSet = Math.floor(+eval(input.value));
    var result = document.getElementById('result');
    result.value = '=' + resultToSet;
}