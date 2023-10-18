/**

 Summary of using array methods:
 Mutating and non-mutating

 */

const myNumbersArray = [ 1, 2, 33, 44, 55, 3, 1 ];

// Iterate elements
[1,2,3,4,5].forEach(element => {});

// Mapping
// Element transformation
const mapped = [1,2,3,4,5].map((nr) => 'Chapter #'+nr);

// Filtering
// Changing the number of elements (shorten)
const oddNumbers = [1,2,3,4,5].filter((nr) => (nr%2));

// Check the condition
// Each element satisfies a predicate
const allLowerThan10 = [1,2,3,4,5].every((nr) => nr < 10);

// "Reduce" elements
// Where map and filter might not be beneficial, reduce will be useful
const sumOfElements = myNumbersArray.reduce((acc, value) => acc + value);



const mutableArray = ['a','b','c','d'];

// Array mutating methods:

// adding an element at the end:
mutableArray.push('e');

// "taking out" the last item:
mutableArray.pop();

// adding an element to the beginning:
mutableArray.unshift('x');

// “taking out” the first element:
mutableArray.shift();


// search indexes, elements, etc.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
