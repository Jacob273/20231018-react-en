/**
 "What? Function returns a function?"

 #Objective:
 Basic ways of using functions in JavaScript.
 Realizing the importance of JavaScript in terms of ownership:
 "Functions first class citizens"

*/

/** > basic usage: Declaration + name - call by name */
function iAmDeclared() {
	return 'hello';
}
// iAmDeclared();


/** > called by a reference to an anonymous function */
const iAmAnonymous = function () {
	return 'anonymous'
}

/** > passing a function through a parameter of another function */
function getCollection(callback) {
	callback([1, 2, 3, 4])
}

/** > composition of functions in an object (function becomes a method) */
const myFunctionsNamespace = {
	declared: iAmDeclared,
	anonymous: iAmAnonymous,
	withCollection: getCollection,
	other: function() {
		return 'from other!'
	}
}

/** > access the scope of another function inside "my function" */
function outerScope() {
	const outer = 'OUTER';

	function innerScope() {
		console.log(outer + ' INNER');
	}

	innerScope();
}

/** > returning a function from another function */
function hello() {
	const world = 'World!';
	return function () {
		return 'Hello ' + world;
	}
}
