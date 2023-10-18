/**
 New ways of declaring variables (and constants): let, const

 After 2015 we get the lexical scope of variables and 2 keywords
 we use let and const instead of var

 Check if your browser recognizes these keywords:
 @see {@link https://caniuse.com/#search=let}
 @see {@link https://caniuse.com/#search=const}

 If not, we can use the transpiler (which we use anyway in large projects):
 @see {@link https://babeljs.io/}

 #Objective:
 Achieving lexical coverage.
 Favoring const - then the variable cannot be reassigned (we can feel safer).
 */

let x = 1;
x++;
console.log('My ex is:', x);

const y = 100;
console.log('Hello I\'m', y, 'I cannot be reassigned');


