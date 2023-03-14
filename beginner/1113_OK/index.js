const fs = require('fs');

const dirDev = './dev';
const file = '5 4\n7 2\n3 8\n2 2';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split('\n');

// ---------------------------------------------------------------->

let bool = true;
let i = 0;
let getNumberOfLines;

function descAndAsc(numberM, numberN) {
  if (numberM === numberN) return false;
  if (numberM > numberN) { console.log('Decrescente'); } else { console.log('Crescente'); }
  return true;
}

while (bool) {
  getNumberOfLines = lines[i].split(' ');

  i += 1;

  bool = descAndAsc(parseInt(getNumberOfLines[0], 10), parseInt(getNumberOfLines[1], 10));
}
