const add = (one, two) => one + two;
const subtract = (one, two) => one - two;
const multiply = (one, two) => one * two;
const divide = (one, two) => one / two;

const operate = (operator, one, two) => {
    switch (operator) {
        case '+':
            return add(one, two);
        case '-':
            return subtract(one, two);
        case '*':
            return multiply(one, two);
        case '/':
            return divide(one, two);
    }
}