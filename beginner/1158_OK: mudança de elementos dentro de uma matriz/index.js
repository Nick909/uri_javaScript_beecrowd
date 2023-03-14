const fs = require('fs');

const dir = './dir';
const path = `${dir}/input.txt`;
const file = '2\n4 3\n11 2';

if (!fs.existsSync(dir)) fs.mkdirSync(dir);

fs.writeFileSync(path, file, 'utf-8');

const input = fs.readFileSync(path, 'utf-8');
const lines = input.split('\n');

// ------------------------------------------------>

const n = parseInt(lines.shift(), 10);
let sum = 0;
let aux = 0;

lines.map((element) => lines.splice(lines.indexOf(element), 1, element.split(' ').map((el) => parseInt(el, 10))));

for (let i = 0; i < n; i += 1) {
  sum = 0;
  aux = lines[i][0];
  aux = (aux % 2 === 0) ? aux += 1 : aux;
  for (let l = 0; l < lines[i][1]; l += 1) {
    sum += aux;
    aux += 2;
  }
  console.log(sum);
}
