const fs = require('fs');

const dir = './dir';
const path = `${dir}/input.txt`;
const file = `4
6
5
28
1`;

if (!fs.existsSync(dir)) fs.mkdirSync(dir);

fs.writeFileSync(path, file, 'utf-8');

const input = fs.readFileSync(path, 'utf-8');
const lines = input.split('\n');

// <<<<<<======//======// (-__-) //======//======>>>>>

const TAM = parseInt(lines.shift(), 10);

const ehPerfeito = (num) => {
  let sum = 1;

  for (let countI = 2; countI < num; countI += 1) {
    if (num % countI === 0) sum += countI;
  }

  if (sum === num && num !== 1) return `${num} eh perfeito`;
  return `${num} nao eh perfeito`;
};

for (let countX = 0; countX < TAM; countX += 1) {
  console.log(ehPerfeito(parseInt(lines.shift(), 10)));
}
