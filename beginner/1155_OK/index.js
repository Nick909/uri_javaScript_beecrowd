let a;
let c;
let S = 0;

for (a = 1; a <= 100; a += 1) {
  c = 1 / a;
  S += c;
}

console.log(S.toFixed(2));
