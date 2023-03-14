const fs = require('fs');

const dir = 'dev';
const file = '5';

if (!fs.existsSync(dir)) fs.mkdirSync(dir);

fs.writeFileSync(`${dir}/index.txt`, file, 'utf8');

const input = fs.readFileSync(`${dir}/index.txt`, 'utf-8');

// ---------------------------------------------------------------->
const arr = [];
let aux = 0;

for (let i = 1; i <= parseInt(input, 10); i += 1) {
  aux = i;
  for (let l = 0; l < 3; l += 1) {
    arr[l] = aux;
    aux *= i;
  }
  console.log(arr[0], arr[1], arr[2]);
  console.log(arr[0], arr[1] + 1, arr[2] + 1);
}
