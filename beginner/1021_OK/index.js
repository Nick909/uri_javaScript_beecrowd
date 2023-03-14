const fs = require('fs');

const dirDev = './dev';
const file = '576.73';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split('.'); // replace the '\n' with '.'

// ---------------------------------------------------------->

let notas = parseInt(lines[0], 10);
let moedas = parseInt(lines[1], 10);

function desc(singleNota, value, obj1) {
  const obj = obj1;
  if (singleNota >= value) {
    obj.cont += 1;
    return desc(singleNota - value, value, obj);
  }

  if (obj.booleanSwitch) {
    notas = singleNota;
  } else {
    moedas = singleNota;
  }

  return obj.cont;
}

console.log('NOTAS:');
console.log(`${desc(notas, 100, { cont: 0, booleanSwitch: true })} nota(s) de R$ 100.00`);
console.log(`${desc(notas, 50, { cont: 0, booleanSwitch: true })} nota(s) de R$ 50.00`);
console.log(`${desc(notas, 20, { cont: 0, booleanSwitch: true })} nota(s) de R$ 20.00`);
console.log(`${desc(notas, 10, { cont: 0, booleanSwitch: true })} nota(s) de R$ 10.00`);
console.log(`${desc(notas, 5, { cont: 0, booleanSwitch: true })} nota(s) de R$ 5.00`);
console.log(`${desc(notas, 2, { cont: 0, booleanSwitch: true })} nota(s) de R$ 2.00`);
console.log('MOEDAS:');
console.log(`${desc(notas, 1, { cont: 0, booleanSwitch: true })} moeda(s) de R$ 1.00`);
console.log(`${desc(moedas, 50, { cont: 0, booleanSwitch: false })} moeda(s) de R$ 0.50`);
console.log(`${desc(moedas, 25, { cont: 0, booleanSwitch: false })} moeda(s) de R$ 0.25`);
console.log(`${desc(moedas, 10, { cont: 0, booleanSwitch: false })} moeda(s) de R$ 0.10`);
console.log(`${desc(moedas, 5, { cont: 0, booleanSwitch: false })} moeda(s) de R$ 0.05`);
console.log(`${desc(moedas, 1, { cont: 0, booleanSwitch: false })} moeda(s) de R$ 0.01`);
