let firstNumber;
let operator;
let secondNumber;
let displayText = document.getElementById('displayScreen');
let buttons = document.querySelectorAll('button');
let result;
let previousOperator;

function checkDecimals(num) {
    let numStr2 = num.toString().split('.')
    let firstPart = numStr2[0].length;
    if (firstPart > 8  ) {
        return num.toFixed(0);
    }
    return num.toFixed(2);
}

function add(a,b){
    firstNumber = parseInt(a)+parseInt(b);
    if (firstNumber.toString().length > 12) {
        firstNumber = 'NaN';
        return firstNumber;
    }
    return firstNumber;
}
function subtract(c,d) {
    if (c === d) {
        firstNumber = 0;
        return firstNumber;
    }
    firstNumber = parseInt(c)-parseInt(d);
    if (firstNumber.toString().length > 12) {
        firstNumber = 'NaN';
        return firstNumber;
    }

    return firstNumber;
}
function multiply(e,f) {
    firstNumber = parseInt(e)*parseInt(f);
    if (firstNumber.toString().length > 12) {
        firstNumber = 'NaN';
        return firstNumber;
    }
    return firstNumber;
}
function divide(g,h) {
    firstNumber = parseInt(g)/parseInt(h);
    if (firstNumber.toString().length > 12) {
        firstNumber = checkDecimals(firstNumber);
        return firstNumber;
    }
    return firstNumber;
}

function operate(firstNumber,secondNumber,operator) {
    switch (operator){
        case '+':
            return add(firstNumber,secondNumber);
            break;
        case '-':
            return subtract(firstNumber,secondNumber);
            break;
        case 'x':
            return multiply(firstNumber,secondNumber);
            break;
        case '/':
            return divide(firstNumber,secondNumber);
            break;
        default:
            break;

    }
}

function display() {
    displayText.textContent = '';
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            let targets = event.target.id;
            switch(targets) {
                case 'zero':
                    if (displayText.textContent ==='+' || displayText.textContent ==='-' || displayText.textContent ==='x' || displayText.textContent ==='/' || displayText.textContent === 'NaN'|| displayText.textContent === 'Infinity' ) {
                        displayText.textContent = '';
                    }

                    if (!isNaN(parseInt(result))) {
                        secondNumber = '';
                        displayText.textContent ='';
                        result = '';

                    }
                    if (displayText.textContent.length !== 12 && displayText.textContent[0] !== '0') {
                        displayText.textContent += "0";
                        }
                    break;
                case 'one':
                    if (displayText.textContent ==='+' || displayText.textContent ==='-' || displayText.textContent ==='x' || displayText.textContent ==='/' || displayText.textContent === 'NaN'|| displayText.textContent === 'Infinity' ) {
                        displayText.textContent = '';
                    }
                        if (!isNaN(parseInt(result))) {
                            secondNumber = '';
                            displayText.textContent ='';
                            result = '';
                        }

                        if (displayText.textContent.length !== 12 && displayText.textContent[0] !== '0') {
                            displayText.textContent += "1";
                            }

                    break;
                case 'two':
                    if (displayText.textContent ==='+' || displayText.textContent ==='-' || displayText.textContent ==='x' || displayText.textContent ==='/' || displayText.textContent === 'NaN' || displayText.textContent === 'Infinity') {
                        displayText.textContent = '';
                    }
                    if (!isNaN(parseInt(result))) {
                        secondNumber = '';
                        displayText.textContent ='';
                        result = '';

                    }

                
                   if (displayText.textContent.length !== 12 && displayText.textContent[0] !== '0') {
                        displayText.textContent += "2";
                        }




                    break;
                case 'three':
                    if (displayText.textContent ==='+' || displayText.textContent ==='-' || displayText.textContent ==='x' || displayText.textContent ==='/' || displayText.textContent === 'NaN' || displayText.textContent === 'Infinity') {
                        displayText.textContent = '';
                    }

                        if (!isNaN(parseInt(result))) {
                            secondNumber = '';
                            displayText.textContent ='';
                            result = '';
                        }

                        if (displayText.textContent.length !== 12 && displayText.textContent[0] !== '0') {
                            displayText.textContent += "3";
                            }



                    break;
                case 'four':
                    if (displayText.textContent ==='+' || displayText.textContent ==='-' || displayText.textContent ==='x' || displayText.textContent ==='/' || displayText.textContent === 'NaN' || displayText.textContent === 'Infinity') {
                        displayText.textContent = '';
                    }

                        if (!isNaN(parseInt(result))) {
                            secondNumber = '';
                            displayText.textContent ='';
                            result = '';

                        }

                        if (displayText.textContent.length !== 12 && displayText.textContent[0] !== '0') {
                            displayText.textContent += "4";
                            }
 


                    break;
                case 'five':
                    if (displayText.textContent ==='+' || displayText.textContent ==='-' || displayText.textContent ==='x' || displayText.textContent ==='/' || displayText.textContent === 'NaN' || displayText.textContent === 'Infinity') {
                        displayText.textContent = '';
                    }

                        if (!isNaN(parseInt(result))) {
                            secondNumber = '';
                            displayText.textContent ='';
                            result = '';

                        }

                        if (displayText.textContent.length !== 12 && displayText.textContent[0] !== '0') {
                            displayText.textContent += "5";
                            }


                    break;
                case 'six':
                    if (displayText.textContent ==='+' || displayText.textContent ==='-' || displayText.textContent ==='x' || displayText.textContent ==='/' || displayText.textContent === 'NaN' || displayText.textContent === 'Infinity') {
                        displayText.textContent = '';
                    }

                        if (!isNaN(parseInt(result))) {
                            secondNumber = '';
                            displayText.textContent ='';
                            result = '';

                        }


                        if (displayText.textContent.length !== 12 && displayText.textContent[0] !== '0') {
                            displayText.textContent += "6";
                            }


                    break;
                case 'seven':
                    if (displayText.textContent ==='+' || displayText.textContent ==='-' || displayText.textContent ==='x' || displayText.textContent ==='/' || displayText.textContent === 'NaN' || displayText.textContent === 'Infinity' ) {
                        displayText.textContent = '';
                    }
                    if (!isNaN(parseInt(result))) {
                        secondNumber = '';
                        displayText.textContent ='';
                        result = '';

                    }

                    if (displayText.textContent.length !== 12 && displayText.textContent[0] !== '0') {
                        displayText.textContent += "7";
                        }
                    break;
                case 'eight':
                    if (displayText.textContent ==='+' || displayText.textContent ==='-' || displayText.textContent ==='x' || displayText.textContent ==='/' || displayText.textContent === 'NaN' || displayText.textContent === 'Infinity') {
                        displayText.textContent = '';
                    }
                    if (!isNaN(parseInt(result))) {
                        secondNumber = '';
                        displayText.textContent ='';
                        result = '';

                    }


                    if (displayText.textContent.length !== 12 && displayText.textContent[0] !== '0') {
                        displayText.textContent += "8";
                        }


                    break;
                case 'nine':


                    if (displayText.textContent ==='+' || displayText.textContent ==='-' || displayText.textContent ==='x' || displayText.textContent ==='/' || displayText.textContent === 'NaN' || displayText.textContent === 'Infinity') {
                        displayText.textContent = '';
                    }
                    if (!isNaN(parseInt(result))) {
                        secondNumber = '';
                        result = '';
                        displayText.textContent ='';



                    }

                    if (displayText.textContent.length !== 12 && displayText.textContent[0] !== '0') {
                        displayText.textContent += "9";

                        }
                    




                    break;
                case 'add':
                    firstNumber = displayText.textContent;
                    
                    
                    if (operator === '-') {
                        if (displayText.textContent !== '-' && firstNumber[0] !== '-' && (isNaN(parseInt(result))))  {
                            firstNumber = '-' + displayText.textContent;
                        }
                    }
                    if (displayText.textContent === ''){
                        firstNumber = '0';
                    
                    }
                    else if (firstNumber === '+' || firstNumber === '-' || firstNumber === 'x' || firstNumber === '/') {
                        firstNumber = 'NaN';
                    }
                    displayText.textContent = "+";
                    
                    operator ='+';
                    break;
                    case 'subtract':
                        firstNumber = displayText.textContent;
                        if (operator === '-') {
                            if (displayText.textContent !== '-' && firstNumber[0] !== '-' && (isNaN(parseInt(result))))  {
                                firstNumber = '-' + displayText.textContent;
                            }
                        }
                        if (displayText.textContent === ''){
                            firstNumber = '0';
                        
                        }
                        else if (firstNumber === '+' || firstNumber === '-' || firstNumber === 'x' || firstNumber === '/') {
                            firstNumber = 'NaN';
                        }
                        displayText.textContent = "-";
    
                        operator ='-';
                        break;
                case 'multiply':
                    firstNumber = displayText.textContent;

                    if (operator === '-') {
                        if (displayText.textContent !== '-' && firstNumber[0] !== '-' && (isNaN(parseInt(result))))  {
                        firstNumber = '-' + displayText.textContent;
                        }
                    }
                        if (displayText.textContent === ''){
                            firstNumber = '0';
                        
                        }
                        else if (firstNumber === '+' || firstNumber === '-' || firstNumber === 'x' || firstNumber === '/') {
                            firstNumber = 'NaN';
                        }
                        displayText.textContent = "x";
                
                    operator ='x';
                    break;
                case 'divide':
                        firstNumber = displayText.textContent;

                        if (operator === '-') {
                            if (displayText.textContent !== '-' && firstNumber[0] !== '-' && (isNaN(parseInt(result))))  {
                                firstNumber = '-' + displayText.textContent;
                            }
                        }
                        if (displayText.textContent === ''){
                            firstNumber = '0';
                        }
                        else if (firstNumber === '+' || firstNumber === '-' || firstNumber === 'x' || firstNumber === '/') {
                            firstNumber = 'NaN';
                        }
                    displayText.textContent = "/";
                    operator ='/';
                    break;
                case 'clear':
                    firstNumber = '';
                    secondNumber = '';
                    displayText.textContent = '';
                    operator = '';
                    previousOperator = '';
                    break;
                    case 'enter':
                        if (firstNumber !== result) {
                            secondNumber = displayText.textContent;
                        }
                        console.log(firstNumber);
                        console.log(secondNumber);
                        if (operator === '') {
                            firstNumber = displayText.textContent;
                            displayText.textContent = firstNumber;
                        } else if (operator !== '') {
                            result = operate(firstNumber, secondNumber, operator).toString();

                            if (result !== 'Nan' || result !== 'Infinity') {
                                displayText.textContent = result;
                                firstNumber = result;
                            }
                            if (result === 'Nan' || result === 'Infinity') {
                                firstNumber = '';
                                secondNumber = '';
                                operator = '';
                                previousOperator = '';

                            }
                        }
                        previousOperator = operator;
                        if (firstNumber !== result) {
                            secondNumber = '';
                        }
                        break;

                default:
                    break;

            }
        });
    });
}



document.addEventListener('DOMContentLoaded',display);