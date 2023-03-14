let I = 1;
let J = 7;

while (I <= 9) {
  if (J >= 5) {
    console.log(`I=${I} J=${J}`);
    J -= 1;
  } else {
    J = 7;
    I += 2;
  }
}
