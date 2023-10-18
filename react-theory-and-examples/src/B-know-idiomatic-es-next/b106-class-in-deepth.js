/**

 Continued about classes

 #Objective:
 Learning the capabilities of classes, using the constructor, inheritance.
 A reminder about the properties and use of logical operators in JavaScript

 */

class Vehicle {
	name = 'My super Cool Vehicle'
}

class Helicopter extends Vehicle {

	constructor(name) {
		super();
		this.name = name || this.name;
	}
}

console.log(new Helicopter())
console.log(new Helicopter('boom'))
