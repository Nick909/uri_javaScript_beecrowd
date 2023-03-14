const fs = require('fs');

const dirDev = './dev';
const file = '5 2\n6 3\n5 0\n';

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

function listAndSum(numberM, numberN) {
  if (numberM <= 0 || numberN <= 0) return false;

  let aux = 0;
  let m = numberM;
  let n = numberN;

  const arr = [];
  let sum = 0;

  if (m > n) {
    aux = n;
    n = m;
    m = aux;
  }

  for (let index = m; index <= n; index += 1) {
    // console.log(index);
    arr.push(index);
    sum += index;
  }

  console.log(`${arr.join(' ')} Sum=${sum}`);
  return true;
}

while (bool) {
  getNumberOfLines = lines[i].split(' ');

  i += 1;

  bool = listAndSum(parseInt(getNumberOfLines[0], 10), parseInt(getNumberOfLines[1], 10));
}
