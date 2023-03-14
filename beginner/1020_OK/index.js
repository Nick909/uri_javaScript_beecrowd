const fs = require('fs');

const dirDev = './dev';
const file = '30';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split('\n');

//= =======================================================

let day = parseInt(lines.shift(), 10);
const year = day / 365;
const month = (day % 365) / 30;
day = day % 365 % 30;

console.log(
  `${parseInt(year, 10)} ano(s)\n${
    parseInt(month, 10)} mes(es)\n${
    parseInt(day, 10)} dia(s)`,
);
