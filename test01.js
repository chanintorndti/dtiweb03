//ใช้แบบ CommonJS
const dti01 = require("./my-module01.js");
let {sauXX, scoreXX} = require("./my-module02.js");

console.log(dti01.score);
dti01.score = 0;
console.log(dti01.score);

console.log(`10 + 20 = ${dti01.sumNumber(10, 20)}`);
console.log(
  `สี่เหลี่ยมกว้าง 100 ยาว 30 มีพื้นที่ ${dti01.squareArea(100, 30)}`
);

console.log(`SAU คือ ${dti01.sau}`);

console.log(sauXX);
console.log(scoreXX);
scoreXX = 111
console.log(scoreXX)
