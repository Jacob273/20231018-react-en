/**

 Shortened descriptions of fields and methods in objects

 #Objective:
 Learning new syntax. Which simplifies the notation of an object.
 It is often useful in JS for "assembling" objects from different variables/constants.
 */

// We often encounter such operations in JS

const gender = 'female';

const userAnna  = {name: 'Anna',  gender: gender};
const userPaula = {name: 'Paula', gender: gender};

// For convenience, in 2015 the so-called shorthand syntax for object fields
// This means that if the name of your field in the object and the variable you want to assign there - are the same, you can write it in short form:

const myUser = {name: 'Kate', gender};

// ATTENTION! In scope you must have it named exactly like this
// variable/constant as the name of the field you want in the object
// Whether the variable is a function/object/simple type/array
// doesn't matter. It will be entered into the object as key - value.


const greetings = 'Hello!';

/** The shorthand is introduced into the declaration of the object's methods: */

// In the past we could declare a function in an object like this:

const myObject = {
	myFunction: function() {
		console.log('some function logic!')
	}
}

// Now we can do it much simpler:

const my2ndObject = {
	myFunction() {
		console.log('some function logic!')
	}
}
