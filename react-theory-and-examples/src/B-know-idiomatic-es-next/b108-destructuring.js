/**

 Destructuring objects and arrays in JavaScript

 #Objective:
 Learning how to "destructure" objects and arrays.
 Simplifying access to subsequent "levels" of nesting inside an object.
 (object in object... in object... in... etc. etc.)
 How to alias destructured variables.

 */

 // Old days:
 const simpleExampleObject = { hello: 'World', goodbye: 'Universe', user: { name: 'Michal' }  }

 const hello = simpleExampleObject.hello;
 console.log(hello)

 // Now:
 const { goodbye } = simpleExampleObject;
 console.log(goodbye)

 // You can also:
 const { user: {name} } = simpleExampleObject;
 console.log(name);


 // Variable names do not matter in arrays (they can be arbitrary):

// Old days:
 const fruits = ['apple', 'banana', 'mango', 'cherry'];

 const banana = fruits[1];
 console.log(banana);

 // Now:
 const [myApple, myBanana] = fruits;
 console.log(myApple);
 console.log(myBanana);

 // You can also:
 const [, onlyBanana] = fruits;
 console.log(onlyBanana);
