/**
 Declaring classes in JavaScript - then and now.

 #Objective:
 Learning the syntax with class. Resembling in form and notation what we know from object-oriented languages (C#, Java - etc...)
 Understanding that this is just syntactic sugar.
 */

// Achieve class-like properties before 2015:
function OldCar() {
	this.brand = 'Audi';
	this.model = 'A8';
	this.sayHi = function() {
		return `Hello from ${this.brand}! I'm model ${this.model}`
	}
}


// Basic class syntax in ES6:
class Car {

	constructor() {
		this.brand = 'Audi';
		this.model = 'A8';
	}

	sayHi() {
		return `Hello from ${this.brand}! I'm model ${this.model}`
	}
}


class CarFromTheFuture {

	// Specifying fields not in the constructor
	brand = 'Audi';
	model = 'A8';
	static wheels = 4

	sayHi() {
		return `Hello from ${this.brand}! I'm model ${this.model}`
	}

	static somethingStatic() {
		console.log('Method can be static since 2015 (ES6)')
	}
}

