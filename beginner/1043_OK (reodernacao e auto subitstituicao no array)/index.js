/* eslint-disable no-mixed-operators */
const fs = require('fs');

const dirDev = './dev';
const file = '6.0 4.0 2.1';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split(' ');

// ---------------------------------------------------------------->

lines.sort((a, b) => a - b).map((e) => lines.splice(lines.indexOf(e), 1, parseFloat(e)));

const sum = (arr) => arr.reduce((total, num) => total + num);

if ((lines[0] + lines[1]) > lines[2]) {
  console.log('Perimetro =', sum(lines).toFixed(1));
} else {
  console.log('Area =', (lines[0] * (lines[1] + lines[2]) / 2).toFixed(1));
}
