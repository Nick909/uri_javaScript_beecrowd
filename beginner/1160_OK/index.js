const fs = require('fs');

const dir = './dir';
const path = `${dir}/input.txt`;
const file = `6
100 150 1.0 0
90000 120000 5.5 3.5
56700 72000 5.2 3.0
123 2000 3.0 2.0
100000 110000 1.5 0.5
62422 484317 3.1 1.0`;

if (!fs.existsSync(dir)) fs.mkdirSync(dir);

fs.writeFileSync(path, file, 'utf8');

const input = fs.readFileSync(path, 'utf-8');
const lines = input.split('\n');

// ----------------------------------------------------->

const TAM = parseInt(lines.shift(), 10);

lines.map((element) => lines.splice(lines.indexOf(element), 1, element.split(' ')));

const time = (pa, pb, ga, gb) => {
  let cont = 0;
  let auxPa = pa;
  let auxPb = pb;

  do {
    auxPa += parseInt((auxPa * ga) / 100, 10);
    auxPb += parseInt((auxPb * gb) / 100, 10);
    cont += 1;
    if (cont > 100) return 'Mais de 1 seculo.';
  } while (auxPa <= auxPb);

  return `${cont} anos.`;
};

for (let i = 0; i < TAM; i += 1) {
  console.log(time(
    parseInt(lines[i][0], 10),
    parseInt(lines[i][1], 10),
    parseFloat(lines[i][2]),
    parseFloat(lines[i][3]),
  ));
}
