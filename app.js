let totalEquation = "";

const add = (one, two) => one + two;
const subtract = (one, two) => one - two;
const multiply = (one, two) => one * two;
const divide = (one, two) => one / two;
const percent = (one) => one / 100;
const sign = (one) => 0 - one;
const operate = (operator, one, two) => {
  switch (operator) {
    case "+":
      return add(one, two);
    case "-":
      return subtract(one, two);
    case "*":
      return multiply(one, two);
    case "÷":
      return divide(one, two);
  }
};


// basic thought of process: disable operation buttons while another operator was
// just clicked.
const calculate = (total) => {
    let calcList = total.split(' ')
    let curIndex = 0;
    if (calcList.length === 1) {
        return parseInt(calcList[0])
    }
    
    let final = operate(calcList[1], parseFloat(calcList[0]), parseFloat(calcList[2]))
    calcList = calcList.slice(3);
    while (calcList.length >= 2) {
        final = operate(calcList[0], parseFloat(final), parseFloat(calcList[1]))
        calcList = calcList.slice(2);
    }
    return +(final.toFixed(5));
}

const handleAnswer = (e) => {
    const button = document.querySelector(`button#${e.target.id}`)
    const label = document.querySelector('.display')
    label.innerText =     calculate(totalEquation)
    totalEquation = label.innerText

}
const handleOperations = (e) => {
    const operationList = document.querySelectorAll('.operator');
    const button = document.querySelector(`button#${e.target.id}`)
    const equalsButton = document.querySelector('#equals');
    equalsButton.disabled = true;
    if (button.innerText === '.') {
        totalEquation += `${button.innerText}`

    }
    else {
        totalEquation += ` ${button.innerText} `
    }
    const label = document.querySelector('.display')
    label.innerText = totalEquation
    operationList.forEach( (operation) => operation.disabled = true)

}
const handleNumbers = (e) => {
    const operationList = document.querySelectorAll('.operator');
    operationList.forEach( (operation) => operation.disabled = false)
    if (totalEquation.includes('.')) {
        const decimal = document.querySelector('.operator#decimal')
        decimal.disabled = true
    }
    const clearButton = document.querySelector('#equals');
    clearButton.disabled = false;
    const button = document.querySelector(`button#${e.target.id}`)
    totalEquation += button.innerText
    const label = document.querySelector('.display')
    label.innerText = totalEquation
}

const handleClear = () => {
    const label = document.querySelector('.display')
    const operationList = document.querySelectorAll('.operator');
    operationList.forEach( (operation) => operation.disabled = false)
    totalEquation = ''
    label.innerText = ''
}
const operators = document.querySelectorAll('.operator');
operators.forEach( operator => operator.addEventListener( 'click', handleOperations))
operators.forEach( (operation) => operation.disabled = true)



const numbers = document.querySelectorAll('.number');
numbers.forEach( operator => operator.addEventListener( 'click', handleNumbers))


const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', handleClear)

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', handleAnswer);