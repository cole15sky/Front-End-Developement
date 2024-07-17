// Hoisting is a mechanism where variables and function declarations are moved to the top of their scope before code execution.

 

console.log(x); // prints undefined
var x = 100;
console.log(x); //prints 100

 

// Variables declared using var are hoisted to the top of their scope and initialized with a value of undefined(special type).
// Variables declared using let are hoisted to the top of their scope but are not initialized with any value.
// Variables declared using const are hoisted to the top of their scope but are not initialized with any value.
 

 

console.log(x); // prints undefined
var x = 100;
console.log(x); //prints 100

console.log(y); //Reference error
let y = 200;
console.log(y); //prints 200

console.log(z); //Reference error
const z = 300;
console.log(z); //prints 300
 

var a = 10;
{
    var a = -10;
}
let b = a;
{
    let b = -20;
}

console.log(b)
