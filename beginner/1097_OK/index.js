let aux = 7;
let I = 1;
let J = 7;

while (I <= 9) {
  if (J >= aux - 2) {
    console.log(`I=${I} J=${J}`);
    J -= 1;
  } else {
    aux += 2;
    J = aux;
    I += 2;
  }
}
