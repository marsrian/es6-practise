function add(number1, number2) {
    return number1 + number2;
}
const total = add(12, 38);
console.log(total);

function sum(num1, num2 = 30) {
    return num1 + num2;
}
const addSum = sum(23);
console.log(addSum);