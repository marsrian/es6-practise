// function doubleIt(num) {
//     return num * 2;
// }
// const result = doubleIt(10);
// console.log(result);

// const doubleIt = function(num) {
//     return num * 2;
// }
// const result = doubleIt(5);
// console.log(result);

const doubleIt = num => num * 2;
const add = (x, y) => x + y;
const give5 = () => 5;
const result2 = give5();

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

console.log(result2);
const result3 = doMath(7, 5)
console.log(result3);
// const result = add(40, 56);
// console.log(result);