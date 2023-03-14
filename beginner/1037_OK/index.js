const fs = require('fs');

const dirDev = './dev';
const file = '-25.02';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split(' ');

// ---------------------------------------------------------------->

const x = parseFloat(lines.shift());

if (x >= 0 && x <= 25) {
  console.log('Intervalo [0,25]');
} else if (x > 25 && x <= 50) {
  console.log('Intervalo (25,50]');
} else if (x > 50 && x <= 75) {
  console.log('Intervalo (50,75]');
} else if (x > 75 && x <= 100) {
  console.log('Intervalo (75,100]');
} else {
  console.log('Fora de intervalo');
}
