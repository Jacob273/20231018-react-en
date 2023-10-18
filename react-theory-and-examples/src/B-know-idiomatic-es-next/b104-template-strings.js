/**

 #Objective:
 Learn how to deal with multiline string and text interpolation.
 Various - strange, but from the point of view correct entries, show new possibilities of the language,
 which will later prove helpful when writing React applications.
 */

const cooler = 'Super-Freezer-2025';
const cost = 2300;

// dawniej "klejonka":
const cool = 'This is my ' + cooler + ' - you can buy it for ' + cost + 'zł';

// teraz  template-strings:
const templateCool = `This is my ${cooler} - you can buy it for ${cost}zł`;

const interpolate = 'official suit';
console.log(`
  
  My
  multi-lined console.log is wearing an ${interpolate} !
  
`);

/**
 * Interpolation and JavaScript code
 *
 * In this system, you can interpolate those things that are evaluated (calculated) in JS, giving the result.
 * Consider the following, correct from point bye JS examples:
 *
 * */

function sum2Numbers(x, y) {
	return x + y;
}

console.log(`Sum is: ${sum2Numbers(15, 4) + 1 + 1}`)

const showName = true
console.log(`Hello ${ showName ? 'John !' : 'stranger' } `)
console.log(`Hello ${ showName && 'John !' } `)

console.log(`Classical empty object toString will be: ${ {} } `)

console.log(`IIFE inside: ${ (function(){ return '?o_O?'})() } `)
