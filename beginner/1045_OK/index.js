const fs = require('fs');

const dirDev = './dev';
const file = '5.0 7.0 2.0';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split(' ');

// ---------------------------------------------------------------->

lines.sort((a, b) => a - b).reverse().map((e) => lines.splice(lines.indexOf(e), 1, parseFloat(e)));

const A = parseFloat(lines.shift());
const B = parseFloat(lines.shift());
const C = parseFloat(lines.shift());

if (A >= (B + C)) {
  console.log('NAO FORMA TRIANGULO');
} else {
  if (A ** 2 === B ** 2 + C ** 2) {
    console.log('TRIANGULO RETANGULO');
  }

  if (A ** 2 > B ** 2 + C ** 2) {
    console.log('TRIANGULO OBTUSANGULO');
  }

  if (A ** 2 < B ** 2 + C ** 2) {
    console.log('TRIANGULO ACUTANGULO');
  }

  if (A === B && A === C) {
    console.log('TRIANGULO EQUILATERO');
  } else if ((A === B && B !== C) || (A !== B && B === C)) {
    console.log('TRIANGULO ISOSCELES');
  }
}
