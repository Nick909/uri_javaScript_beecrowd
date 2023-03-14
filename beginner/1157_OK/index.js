const fs = require('fs');

const dir = './dir';
const path = `${dir}/input.txt`;
const file = '6';

if (!fs.existsSync(dir)) fs.mkdirSync(dir);

fs.writeFileSync(path, file, 'utf-8');

const input = fs.readFileSync(path, 'utf-8');
const lines = input.split('\n');

// <==========//==========//==========//==========//==========>

const N = parseInt(lines.shift(), 10);

for (let i = 1; i <= N; i += 1) {
  if (N % i === 0) {
    console.log(i);
  }
}
