let n =10000;
let s = '10,000,000';
let nFloat=10000.1211312

console.log(n.toLocaleString()) //10,000
console.log(s.replace(/,/g,'')) //10000000
console.log(parseInt(s,10)) //10
console.log(n.toFixed(10)) //10000.0000000000
console.log(nFloat.toFixed(3)) //10000.121

console.log(Number(true)) //1
console.log(Number(false)) //0
console.log(Number(''))  //0
console.log(Number(' ')) //0
console.log(Number('hello')) //NaN
console.log(Number('10 20')) //NaN
console.log(Number('10     ')) //10
console.log(Number('     10'))//10
console.log(Number('     10     '))//10

console.log(Math.round(4.7)) //5
console.log(Math.pow(2, 8)) //256
console.log(Math.sqrt(64)) //8
console.log(Math.abs(-5)) //5
console.log(Math.random()) //0.08938287481938789