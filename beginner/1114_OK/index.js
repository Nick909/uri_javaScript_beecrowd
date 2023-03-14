const fs = require('fs');

const dirDev = './dev';
const file = '2200\n1020\n2022\n2002\n2200\n1020\n2022';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split('\n');

// ---------------------------------------------------------------->

for (let index = 0; index < lines.length; index += 1) {
  if (lines[index] === '2002') {
    console.log('Acesso Permitido');
    break;
  } else { console.log('Senha Invalida'); }
}
