/* eslint-disable no-unused-expressions */
const fs = require('fs');

const dirDev = '/dev';
const file = 'JOAO\n500.00\n1230.30';

(!fs.existsSync(`.${dirDev}`)) ? fs.mkdirSync(`.${dirDev}`) : null;

fs.writeFileSync(`.${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`.${dirDev}/input.txt`, 'utf-8');
const lines = input.split('\n');

// ------------------------------------

// eslint-disable-next-line no-unused-vars
const name = lines.shift();
let salary = parseFloat(lines.shift());
const amount = parseFloat(lines.shift());

salary += ((15 * amount) / 100);

console.log(`TOTAL = R$ ${salary.toFixed(2)}`);
