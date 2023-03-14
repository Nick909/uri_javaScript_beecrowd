const fs = require('fs');

const dirDev = './dev';
const file = '2 3 2 6';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split(' ');// replace the '\n' with '.'

// ------------------------------------->

// Read 4 integer values A, B, C and D. Then if B is greater than C and D is greater than A
// and if the sum of C and D is greater than the sum of A and B and if C and D were positives
// values and if A is even, write the message “Valores aceitos” (Accepted values). Otherwise,
// write the message “Valores nao aceitos” (Values not accepted).

const a = parseInt(lines.shift(), 10);
const b = parseInt(lines.shift(), 10);
const c = parseInt(lines.shift(), 10);
const d = parseInt(lines.shift(), 10);

if ((b > c) && (d > a) && (c + d > a + b) && c && d && (a % 2 === 0)) {
  console.log('Valores aceitos');
} else {
  console.log('Valores nao aceitos');
}

// console.log(!!0);
