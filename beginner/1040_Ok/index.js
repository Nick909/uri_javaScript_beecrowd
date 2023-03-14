const fs = require('fs');

const dirDev = './dev';
const file = '2.0 4.0 7.5 8.0\n6.4';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split('\n');

// ---------------------------------------------------------------->

const l1 = lines[0].split(' ');

const n1 = parseFloat(l1.shift());
const n2 = parseFloat(l1.shift());
const n3 = parseFloat(l1.shift());
const n4 = parseFloat(l1.shift());

const average = ((n1 * 2) + (n2 * 3) + (n3 * 4) + n4) / 10;
const averageExam = parseFloat(lines[1]);
let averageFinal = 0;

function printMessage(ave, msg) {
  console.log(`Media: ${ave.toFixed(1)}`);
  console.log(msg);
}

if (average >= 7.0) {
  printMessage(average, 'Aluno aprovado.');
} else if (average < 5.0) {
  printMessage(average, 'Aluno reprovado.');
} else {
  averageFinal = (averageExam + average) / 2;

  if (averageFinal >= 5.0) {
    printMessage(average, `Aluno em exame.\nNota do exame: ${averageExam.toFixed(1)}\nAluno aprovado.\nMedia final: ${averageFinal.toFixed(1)}`);
  } else {
    printMessage(average, `Aluno em exame.\nNota do exame: ${averageExam.toFixed(1)}\nAluno reprovado.\nMedia final: ${averageFinal.toFixed(1)}`);
  }
}
