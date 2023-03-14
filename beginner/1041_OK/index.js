const fs = require('fs');

const dirDev = './dev';
const file = '0.1 0.0';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split(' ');

// ---------------------------------------------------------------->

const x = parseFloat(lines.shift());
const y = parseFloat(lines.shift());

if (x === 0 && y === 0) {
  console.log('Origem');
} else if (x === 0 && y !== 0) {
  console.log('Eixo Y');
} else if (y === 0 && x !== 0) {
  console.log('Eixo X');
} else if (y > 0 && x > 0) {
  console.log('Q1');
} else if (y > 0 && x < 0) {
  console.log('Q2');
} else if (y < 0 && x < 0) {
  console.log('Q3');
} else if (y < 0 && x > 0) {
  console.log('Q4');
}
