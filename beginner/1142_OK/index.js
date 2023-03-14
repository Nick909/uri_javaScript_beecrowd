const fs = require('fs');

const dir = 'dev';
const file = '7';

if (!fs.existsSync(dir)) fs.mkdirSync(dir);

fs.writeFileSync(`${dir}/index.txt`, file, 'utf8');

const input = fs.readFileSync(`${dir}/index.txt`, 'utf-8');

// ---------------------------------------------------------------->
let cont = 0;
const arr = [];

for (let i = 0; i < parseInt(input, 10); i += 1) {
  for (let l = 0; l < 4; l += 1) {
    cont += 1;
    if (l !== 3) arr[l] = cont.toString();
    else arr[l] = 'PUM';
  }
  console.log(arr[0], arr[1], arr[2], arr[3]);
}
