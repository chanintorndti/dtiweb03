//ใช้แบบ CommonJS
let {score, squareArea} = require('./my-module01.js')
const dti02 = require('./my-module02.js')

console.log(score)
score = 111

console.log(`สี่เหลี่ยมกว้าง 100 ยาว 30 มีพื้นที่ ${squareArea(100, 30)}`)
console.log(`สี่เหลี่ยมกว้าง 50 ยาว 60 มีพื้นที่ ${squareArea(50, 60)}`)
console.log(dti02.sauXX)