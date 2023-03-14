const fs = require('fs');

const dir = './dir';
const path = `${dir}/input.txt`;
const file = '1';

if (!fs.existsSync(dir)) fs.mkdirSync(dir);

fs.writeFileSync(path, file, 'utf-8');

const input = fs.readFileSync(path, 'utf-8');
const lines = input.split('\n');
// -------------------------------------------->

const arrA = [parseInt(lines.shift(), 10)];

for (let countI = 0; countI < 10; countI += 1) {
  arrA.push(arrA[countI] * 2);
  console.log(`N[${countI}] = ${arrA[countI]}`);
}
