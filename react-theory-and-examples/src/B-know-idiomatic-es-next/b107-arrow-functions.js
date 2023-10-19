/**

 New ownership (after 2015) - arrow functions

 #Objective:
 Learning / recalling the notation of the arrow function in JavaScript
 Checking its properties and various ways of writing.

 */

/** Note 1: Arrow function is ALWAYS anonymous */
// What is of fundamental importance to us is the ability to abbreviate arrow function

const hello = () => {
	return 'Hello'
}
const greetings = name => `Hi ${name} !`
const manyArguments = (a, b) => a + b

// If the expression has a "result" (evaluates) and can be written in one line - then
// the return word is added implicitly - it does not need to be written.
// The result of the function is this what will be calculated on right side of => arrow

const hello3 = function() {
	return 30
}

function hello2() {
	return 'hello !'
}

console.log(hello2())

console.log(hello())

console.log(hello3())

console.log(greetings('Michał'))


/** Note 2: Arrow function can be written multiline */
// Then you must use explicit "return" keyword !

const multilineComputation = name => {
	 const nameToUpper = name.toUpperCase();
	 const luckyNumber = Math.floor(Math.random() * 100);
	 return `Hello ${nameToUpper} your lucky number is ${luckyNumber}`
}


///--------///
// Down to one line:
// You can also return an array or object. However, we have an Object return problem to solve
// We write the object as follows: {} and we define the place of the "body" of the function definition in the same way. => {}
const returnEmptyArray = () => [];
const returnEmptyObject = () => ({}); // this extra parentheses () SOLVES problem - we return EMPTY OBJECT here!

// Remember the function that returns a function? It is also possible and correct to write:
const helloWorld = (world) => () => 'Hello ' + world;


/** Note 3: Arrow function does not "lose context".
 * The word this will point to the object it points to when the arrow function is declared
 * This is why Arrow Function is perfect for callbacks
 * */

class Cat {

	constructor(name) {
		this.name = name;
	}

	meow() {
		function run() {
			console.log(`meow, here: ${this.name}`)
		}
		run();
	}

	arrowMeow() {
		const run = () => {
			console.log(`meow, here: ${this.name}`)
		}
		run();
	}
}

