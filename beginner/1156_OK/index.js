let a; let b = 1; let c; let S = 0;

for (a = 1; a <= 39; a += 2) {
  c = a / b;
  S += c;
  b *= 2;
}

console.log(S.toFixed(2));
