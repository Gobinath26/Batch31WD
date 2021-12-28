// --------------------------------------Task 1-----------------------------------------------------------
// Call vs. Apply vs. Bind Differences and Examples:
//-----------------------------------------------------------------------------------------------------------------
// Call : It invokes the function and allows you to pass in arguments one by one.
//Example:
var person1 = {firstName: 'Gobinath', lastName: 'M'};
var person2 = {firstName: 'Vijay', lastName: 'Kumar'};

function say(msg1,msg2) {
    console.log(msg1 + ' ' + this.firstName + ' ' + this.lastName +','+ msg2);
}

say.call(person1, 'Hello','How are you?'); // Hello Gobinath M,How are you?
say.call(person2, 'Hello',"What's up?"); // Hello Vijay Kumar,What's up?
//-----------------------------------------------------------------------------------------------------------------
// Apply : It invokes the function and allows you to pass in arguments as an array.
//Example:
var person1 = {firstName: 'Ragav', lastName: 'Kumar'};
var person2 = {firstName: 'Gobi', lastName: 'Nath'};

function say(msg1,msg2) {
    console.log(msg1+ ' ' + this.firstName + ' ' + this.lastName + ' ' + msg2);
}

say.apply(person1, ['Hello','Sir...']); // Hello Ragav Kumar Sir...
say.apply(person2, ['I am','from karaikal.']); // I am Gobi Nath from karaikal.
//--------------------------------------------------------------------------------------------------------------
// Bind : It returns a new function, allowing you to pass in an array and any number of arguments.
//Example:
var friend1 = {firstName: 'Aswin', lastName: 'Kumar'};
var friend2 = {firstName: 'Ram', lastName: 'Kumar'};

function say(arg1,arg2) {
    console.log(arg1 +' '+ this.firstName + ' ' + this.lastName+' '+arg2);
}

var sayHelloAswin = say.bind(friend1);
var sayHiiiRam = say.bind(friend2);

sayHelloAswin(['Hello'],['who are you?']); // Hello Aswin Kumar who are you?
sayHiiiRam(['Hiii'],['Welcome.']); // Hiii Ram Kumar Welcome.

//-------------------------------------Task 2------------------------------------------------------

//Prototype Inheritance : `The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects.
//It is a method by which an object can inherit the properties and methods of another object`.

//Example :

function car(arg){ 
    this.wheels = 1;
}
car.prototype.color = 'black'
car.prototype.wheels = 4;
console.log(car.prototype);

//-------------------------------------------End------------------------------------------------------


