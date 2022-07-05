let totalEquation = '';


const add = (one, two) => one + two;
const subtract = (one, two) => one - two;
const multiply = (one, two) => one * two;
const divide = (one, two) => one / two;
const percent = (one) => one / 100;
const sign = (one) => 0 - one;
const operate = (operator, one, two) => {
    switch (operator) {
        case '+':
            return add(one, two);
        case '-':
            return subtract(one, two);
        case '*':
            return multiply(one, two);
        case '÷':
            return divide(one, two);
        case '%':
            return percent(one);
        case '±':
            return sign(one);
    }
}