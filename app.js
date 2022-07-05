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
    let final = operate(calcList[1], parseFloat(calcList[1]), parseFloat(calcList[2]))
    while (calcList.length > 3) {
        final = operate(calcList[1], parseFloat(final), parsFloat(calcList[2]))

        curIndex += 3
    }
    return +final;
}

const handleAnswer = (e) => {
    const button = document.querySelector(`button#${e.target.id}`)

    calculate(button.innerText)
}
const handleOperations = (e) => {
    const operationList = document.querySelectorAll('.operator');
    const button = document.querySelector(`button#${e.target.id}`)
    const equalsButton = document.querySelector('#equals');
    equalsButton.disabled = true;
    totalEquation += ` ${button.innerText} `
    const label = document.querySelector('.display')
    label.innerText = totalEquation
    operationList.forEach( (operation) => operation.disabled = true)
    console.log(operationList)

}
const handleNumbers = (e) => {
    const operationList = document.querySelectorAll('.operator');
    operationList.forEach( (operation) => operation.disabled = false)
    const clearButton = document.querySelector('#equals');
    clearButton.disabled = false;
    console.log(e)
    const button = document.querySelector(`button#${e.target.id}`)
    console.log(button)
    totalEquation += button.innerText
    const label = document.querySelector('.display')
    console.log(label)
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

console.log(operators);


const numbers = document.querySelectorAll('.number');
numbers.forEach( operator => operator.addEventListener( 'click', handleNumbers))

console.log(numbers);

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', handleClear)

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', handleAnswer);