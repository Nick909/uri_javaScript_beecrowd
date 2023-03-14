let aux = 1;
let I = 0;
let J = 1;

const deleteDot = (value) => parseFloat(value.toPrecision(2));

while (I <= 2) {
  if (J <= aux + 2) {
    console.log(`I=${deleteDot(I)} J=${deleteDot(J)}`);
    J += 1;
  } else {
    aux += 0.2;
    J = aux;
    I += 0.2;
  }
}
