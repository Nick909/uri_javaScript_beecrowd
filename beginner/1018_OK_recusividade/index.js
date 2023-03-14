const fs = require('fs');

const dirDev = './dev';
const file = '503';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf-8');
const lines = input.split('\n');

// --------------------------------------------------------->
let value = parseInt(lines.shift(), 10);

function countOfDecrease(singleValue, valueDefault, cont = 0) {
  if (singleValue >= valueDefault) {
    return countOfDecrease(singleValue - valueDefault, valueDefault, cont + 1);
  }

  value = singleValue;
  return cont;
}

const valueDefault = value;

console.log(
  `${valueDefault}\n${
    countOfDecrease(value, 100)} nota(s) de R$ 100,00\n${
    countOfDecrease(value, 50)} nota(s) de R$ 50,00\n${
    countOfDecrease(value, 20)} nota(s) de R$ 20,00\n${
    countOfDecrease(value, 10)} nota(s) de R$ 10,00\n${
    countOfDecrease(value, 5)} nota(s) de R$ 5,00\n${
    countOfDecrease(value, 2)} nota(s) de R$ 2,00\n${
    countOfDecrease(value, 1)} nota(s) de R$ 1,00`,
);

// let oneHundred = 0;
// let fifty = 0;
// let twenty = 0;
// let ten = 0;
// let five = 0;
// let two = 0;
// let one = 0;

// do {
//   if (value > 100) {
//     value -= 100;
//     oneHundred++;
//   } else if (value > 50) {
//     value -= 50;
//     fifty++;
//   } else if (value > 20) {
//     value -= 20;
//     twenty++;
//   } else if (value > 10) {
//     value -= 10;
//     ten++;
//   } else if (value > 5) {
//     value -= 5;
//     five++;
//   } else if (value > 2) {
//     value -= 2;
//     two++;
//   } else if (value >= 1) {
//     value -= 1;
//     one++;
//   }

// } while (value > 0);

// console.log (
//   valueDefault + '\n' +
//   oneHundred  + ' nota(s) de R$ 100,00\n' +
//   fifty + ' nota(s) de R$ 50,00\n' +
//   twenty  + ' nota(s) de R$ 20,00\n' +
//   ten  + ' nota(s) de R$ 10,00\n' +
//   five  + ' nota(s) de R$ 5,00\n' +
//   two  + ' nota(s) de R$ 2,00\n' +
//   one  + ' nota(s) de R$ 1,00\n'

// );
