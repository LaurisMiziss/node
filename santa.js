const fs = require('fs');

const text = fs.readFileSync('./floor.txt', 'UTF-8', (err, data) => {
    if (err) {
        console.log("error");
        return "";
    } else {
        console.log("Success!");
        return data;
    }
});
console.time('santa-time')
const leftPar = '(';
let countLeft = 0;
const rightPar = ')';
let countRight = 0;
let result = 0;
// const countLeft = text.split(leftPar).length - 1;
// console.log(countLeft);
// const countRight = text.split(rightPar).length - 1;
// console.log(countRight);
// const result = countLeft + countRight;
// console.log(result); //around 170...
const lengthText = text.length;

for (let par = 0; par < lengthText; par++) {
    
    console.log(text[par]);
    if (text[par] === leftPar) {
        countLeft++;
    } else {
        countRight++;
    }

    result = countLeft - countRight
    console.log(result);
    if (result === -1) {
        console.log("INDEX IS ", par + 1);
        console.timeEnd('santa-time')
        return;
    }
} //result is 1771, yahooo!
