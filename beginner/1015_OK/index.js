const input = require('fs').readFileSync('./index.txt', 'utf8');

const lines = input.split('\n');

const [xi, yi] = lines[0].split(' ');
const [xii, yii] = lines[1].split(' ');

const result = Math.sqrt((xii - xi) ** 2 + (yii - yi) ** 2);
console.log(result.toFixed(4));

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');
