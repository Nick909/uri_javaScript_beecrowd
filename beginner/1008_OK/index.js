/* eslint-disable no-unused-expressions */
const fs = require('fs');

const dirDev = '/dev';
const dirStdin = `${dirDev}/stdin`;
const file = '25\n100\n5.50';

(!fs.existsSync(`.${dirDev}`)) ? fs.mkdirSync(`.${dirDev}`) : null;

(!fs.existsSync(`.${dirStdin}`)) ? fs.mkdirSync(`.${dirStdin}`) : null;

fs.writeFileSync(`.${dirStdin}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`.${dirStdin}/input.txt`, 'utf-8');
const lines = input.split('\n');

//-----------------------------------

const employees = parseInt(lines.shift(), 10);
const amount = parseInt(lines.shift(), 10);
const hours = parseFloat(lines.shift());

const salary = parseFloat(amount * hours);

console.log(`NUMBER = ${employees}`);
console.log(`SALARY = U$ ${salary.toFixed(2)}`);
