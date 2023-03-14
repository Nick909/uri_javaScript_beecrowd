const fs = require('fs');

const dirDev = './dev';
const file = '11\n13\n53\n7\n923\n11\n33323413\n1534\n173\n19\n11\n13\n53\n7\n923\n11\n23413\n1534\n173\n19\n11\n13\n53\n7\n923\n11\n23413\n1534\n173\n19\n11\n13\n53\n7\n923\n11\n23413\n1533334\n173\n19\n11\n13\n53\n7\n923\n11\n23413\n1534\n173\n19\n1534\n173\n19\n11\n13\n53\n7\n923\n11\n23413\n1534\n173\n19\n11\n13\n53\n7\n923\n11\n23413\n1534\n173\n19\n11\n13\n53\n7\n923\n11\n23413\n1533334\n173\n19\n11';

if (!fs.existsSync(dirDev)) fs.mkdirSync(dirDev);

fs.writeFileSync(`${dirDev}/input.txt`, file, (err) => {
  console.log(err);
});

const input = fs.readFileSync(`${dirDev}/input.txt`, 'utf8');
const lines = input.split('\n');

// ---------------------------------------------------------------->

const cont = lines.reduce((a, b) => Math.max(a, b));

console.log(cont);
console.log(lines.indexOf(cont.toString()) + 1);
