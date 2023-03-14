const fs = require('fs');

const dirDev = './dev';
const file = '3 2\n1\n2 3\n1\n3 1\n2';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split('\n');

// ---------------------------------------------------------------->

let no = 0;
let aux;
let gre = 0;
let int = 0;
let empt = 0;
let total = 0;

do {
  aux = lines.shift().split(' ');

  if (aux.length >= 2) {
    console.log('Novo grenal (1-sim 2-nao)');
    total += 1;
    aux[0] = parseInt(aux[0], 10);
    aux[1] = parseInt(aux[1], 10);

    if (aux[0] > aux[1]) {
      int += 1;
    } else if (aux[0] < aux[1]) {
      gre += 1;
    } else {
      empt += 1;
    }
  } else if (parseInt(aux, 10) === 2) {
    console.log(`${total} grenais`);
    console.log(`Inter:${int}`);
    console.log(`Gremio:${gre}`);
    console.log(`Empates:${empt}`);

    if (int > gre) {
      console.log('Inter venceu mais');
    } else if (int < gre) {
      console.log('Gremio venceu mais');
    } else {
      console.log('Não houve vencedor');
    }
    no = parseInt(aux, 10);
  }
} while (no !== 2);
