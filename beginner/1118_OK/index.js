const fs = require('fs');

const dirDev = './dev';
const file = '-3.5\n3.5\n11.0\n10.0\n4\n1\n8.0\n9.0\n2\n10';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split('\n');

// ---------------------------------------------------------------->

lines.map((e) => lines.splice(lines.indexOf(e), 1, parseFloat(e)));

let i = 0;
let x = 0;
let arr = [];

while (x !== 2) {
  if (lines[i] >= 0 && lines[i] <= 10) {
    arr.push(lines[i]);
    if (arr.length === 2) {
      console.log(`media = ${((arr[0] + arr[1]) / 2).toFixed(2)}`);
    } else if (arr.length > 2) {
      console.log('novo calculo (1-sim 2-nao)');
      if (lines[i] === 1) {
        arr = null;
        arr = [];
      } else if (lines[i] === 2) {
        x = 2;
      }
    }
  } else {
    console.log('nota invalida');
  }

  i += 1;
}
