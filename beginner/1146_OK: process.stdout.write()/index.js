const fs = require('fs');

const dir = './dev';
const file = '5\n10\n3\n0';
const path = `./${dir}/file.txt`;

if (!fs.existsSync(dir)) fs.mkdirSync(dir);

fs.writeFileSync(path, file, 'utf-8');

const input = fs.readFileSync(path, 'utf-8');

const lines = input.split('\n');

// ---------------------------------------------------------->

lines.map((x, index) => {
  let aux = '';
  const num = parseInt(x, 10);

  for (let i = 0; i < num; i += 1) {
    aux += (i + 1);
    if (i < num - 1) aux += ' ';
    else if (index !== lines.length - 1) aux += '\n';
  }
  process.stdout.write(aux);
  return aux;
});
