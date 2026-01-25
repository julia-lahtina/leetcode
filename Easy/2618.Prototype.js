/* Write a function that checks if a given value is an instance of a given class or superclass. For this problem, an object is considered an instance of a given class if that object has access to that class's methods.

There are no constraints on the data types that can be passed to the function. For example, the value or the class could be undefined.

Example 1:

Input: func = () => checkIfInstanceOf(new Date(), Date)
Output: true
Explanation: The object returned by the Date constructor is, by definition, an instance of Date.
Example 2:

Input: func = () => { class Animal {}; class Dog extends Animal {}; return checkIfInstanceOf(new Dog(), Animal); }
Output: true
Explanation:
class Animal {};
class Dog extends Animal {};
checkIfInstanceOf(new Dog(), Animal); // true

Dog is a subclass of Animal. Therefore, a Dog object is an instance of both Dog and Animal.
Example 3:

Input: func = () => checkIfInstanceOf(Date, Date)
Output: false
Explanation: A date constructor cannot logically be an instance of itself.
Example 4:

Input: func = () => checkIfInstanceOf(5, Number)
Output: true
Explanation: 5 is a Number. Note that the "instanceof" keyword would return false. However, it is still considered an instance of Number because it accesses the Number methods. For example "toFixed()". */

var checkIfInstanceOf = function (obj, classFunction) {
  if (obj === null || obj === undefined) return false;
  if (classFunction === null || classFunction === undefined) return false;

  // here I convert obj to object
  const object = Object(obj);
  // here I get prototype
  let prototype = Object.getPrototypeOf(object);
  // here I compare with classFunction.prototype
  while (prototype !== null) {
    if (prototype === classFunction.prototype) {
      return true;
    }
    prototype = Object.getPrototypeOf(prototype);
  }
  return false;
};

console.log(checkIfInstanceOf(new Date(), Date));

class Animal {}
class Dog extends Animal {}
console.log(checkIfInstanceOf(new Dog(), Animal));

console.log(checkIfInstanceOf(Date, Date));

console.log(checkIfInstanceOf(5, Number));

// -------------------------------------------------------------------------
// Prototyp-Kette

function printPrototypeChain(obj) {
  let current = Object(obj);
  let chain = [];

  while (current !== null) {
    chain.push(current);
    current = Object.getPrototypeOf(current);
  }

  chain.push(null);
  console.log(chain);
}

class Animal {
  eat() {}
}
class Dog extends Animal {
  bark() {}
}

const dog = new Dog();
printPrototypeChain(dog);
