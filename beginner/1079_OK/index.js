const fs = require('fs');

const dirDev = './dev';
const file = '3\n6.5 4.3 6.2\n5.1 4.2 8.1\n8.0 9.0 10.0';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split('\n');

// ---------------------------------------------------------------->

const n = lines.shift();

const elements = lines.map((e) => e.split(' '));

for (let cont = 0; cont < n; cont += 1) {
  // eslint-disable-next-line max-len
  console.log(((elements[cont][0] * 2.0 + elements[cont][1] * 3.0 + elements[cont][2] * 5.0) / 10).toFixed(1));
}

// const peso = [2, 3, 5];

// eslint-disable-next-line max-len
// lines.map(e => e.split(' ').map((e, i) => parseFloat(e) * peso[i]).reduce((soma, e) => soma + e) / 10).map(e => console.log((e).toFixed(1)));
