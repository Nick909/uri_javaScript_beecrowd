const fs = require('fs');

const dirDev = './dev';
const file = '2000.00';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split(' ');

// ---------------------------------------------------------------->

const salary = parseFloat(lines.shift());

function salaryReadjustment(sa, per) {
  const adjustmentAmount = (per / 100) * sa;

  console.log(`Novo salario: ${parseFloat(sa + adjustmentAmount).toFixed(2)}`);
  console.log(`Reajuste ganho: ${adjustmentAmount.toFixed(2)}`);
  console.log(`Em percentual: ${per} %`);
}

if (salary > 0 && salary <= 400) {
  salaryReadjustment(salary, 15);
} else if (salary <= 800) {
  salaryReadjustment(salary, 12);
} else if (salary <= 1200) {
  salaryReadjustment(salary, 10);
} else if (salary <= 2000) {
  salaryReadjustment(salary, 7);
} else if (salary > 2000) {
  salaryReadjustment(salary, 4);
} else {
  console.log('valor não existe');
}
