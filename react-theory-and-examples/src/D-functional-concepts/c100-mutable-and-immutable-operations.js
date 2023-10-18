/**

 Further functional programming concepts that we will use in React

 #Objective:
 Learning/recalling: mutating and non-mutating array operations.

 The lack of data mutations is important in the context of React's "change detection".
 Because it can determine based on the state whether a given object requires re-rendering (should I update the DOM?).

 We will use these methods in the same way in Redux

 */

	// ADDING ELEMENTS
	// Let's consider an example:
  const numbers = [1, 2, 3, 4];
  const otherNumbers = numbers;
  // Let's add a number:
  numbers.push(5)
  // Data has been mutated:
  console.log(numbers === otherNumbers)

	// #1 Task:
   // How to create a new array without mutating the previous one and add 5 to it?
	const myNumbers = [1, 2, 3, 4];
	const myOtherNumbers = [];


  	// MODIFYING ELEMENTS
  	// Let's consider an example:
	const letters = ['a', 'b', 'c'];
	for(let x = 0; x < letters.length; x++) {
		letters[x] = letters[x].toUpperCase();
	}
	// the array is "mutated"
  	console.log(letters)

	// #2 Task:
    // How to create a new array with modified elements?
	const myLetters = ['a', 'b', 'c'];
	const myUpperLetters = [];


	// REMOVING ELEMENTS
	// Let's consider an example:
	const fruits = ['apple', 'banana', 'mango', 'cherry'];
	fruits.pop();
    // the array is "mutated"
	console.log(fruits)

	// #3 Task:
	// How to get rid of the last element without mutating the array
	const myFruits = ['apple', 'banana', 'mango', 'cherry'];
	const myFruitsWithoutCherry = [];
