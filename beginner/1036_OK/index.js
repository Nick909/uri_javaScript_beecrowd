const fs = require('fs');

const dirDev = './dev';
const file = '10.3 203.0 5.0';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split(' '); // replace the '\n' with ' '

// ---------------------------------------------------------------->

const a = parseFloat(lines.shift());
const b = parseFloat(lines.shift());
const c = parseFloat(lines.shift());

let delta = b ** 2 - (4 * a * c);

delta = Math.sqrt(delta);

const r1 = (-b + delta) / (2 * a);
const r2 = (-b - delta) / (2 * a);

if (delta > 0 && a !== 0) {
  console.log(`R1 = ${r1.toFixed(5)}`);
  console.log(`R2 = ${r2.toFixed(5)}`);
} else {
  console.log('Impossivel calcular');
}
