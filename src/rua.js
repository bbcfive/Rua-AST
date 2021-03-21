const parse = require('./parser');
const fs = require('fs');
const compiler = require('./compiler');
const astBuilder = require('./astBuilder');

const userInput = fs.readFileSync('../examples/ex1.rua');
const ast = parse(userInput);

console.log(ast);

const userInputArr = fs.readFileSync('../examples/ex2.rua');
const userInput2 = userInputArr.toString().split('');
const tokens = compiler(userInput2);
const ast2 = astBuilder(tokens);

console.log(tokens);
console.log(ast2);

const userInputArr3 = fs.readFileSync('../examples/ex3.rua');
const userInput3 = userInputArr3.toString().split('');
const tokens3 = compiler(userInput3);
const ast3 = astBuilder(tokens3);

console.log(tokens3);
console.log(ast3);

const userInputArr4 = fs.readFileSync('../examples/ex4.rua');
const userInput4 = userInputArr4.toString().split('');
const tokens4 = compiler(userInput4);
const ast4 = astBuilder(tokens4);

console.log(tokens4);
console.log(ast4);