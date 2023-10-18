/**

 After 2015 JS simplifies the way in which we can combine 2 objects or 2 arrays into one.
 Using arrays, we can also easily pass parameters to functions
 We can also create a function with N arguments.

 #Objective:
 Learning about spread and rest operators using practical examples

 */

// ARRAYS:

const fruits = ['apple', 'banana', 'pear'];
const vegetables = ['carrot', 'onion'];

// Spread operator: Combining fruit and vegetable arrays into a new one-dimensional array
const combineWithSpread = [...fruits, ...vegetables];
console.log(combineWithSpread);

// Rest operator: now the function can have (1 + n) call parameters
function showRestArguments(first, ...rest) {
	console.log(first);
	console.log(rest);
}

// OBJECTS:
const user = {
	name: 'Jacek',
	login: 'J4ck'
}

const superUser = {
	...user,
	isAdmin: true
}

console.log(superUser);
