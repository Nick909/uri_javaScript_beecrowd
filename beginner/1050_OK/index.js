const fs = require('fs');

const dirDev = './dev';
const file = '11';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split(' ');

// ---------------------------------------------------------------->

const ddd = parseInt(lines.shift(), 10);

if (ddd === 61) {
  console.log('Brasilia');
} else if (ddd === 71) {
  console.log('Salvador');
} else if (ddd === 11) {
  console.log('Sao Paulo');
} else if (ddd === 21) {
  console.log('Rio de Janeiro');
} else if (ddd === 32) {
  console.log('Juiz de Fora');
} else if (ddd === 19) {
  console.log('Campinas');
} else if (ddd === 27) {
  console.log('Vitoria');
} else if (ddd === 31) {
  console.log('Belo Horizonte');
} else {
  console.log('DDD nao cadastrado');
}
