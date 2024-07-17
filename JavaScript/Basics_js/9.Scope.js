// ========================Scope=======================
// Scope essentially means where these variables are available for use.

// There are two types of scopes in JS:

 

// Function Scope: Visibility is limited to the function.
 function myFn() {

     var x = 10; 

     console.log(x); //prints 10

 } 

 console.log(x); // ReferenceError: x is not defined


 
// Block Scope: Visibility is limited to the block of code.
 if (true) { 

     let x = 10; 

     console.log(x); //prints 10

 } 

 console.log(x); // ReferenceError: x is not defined
 
 
// Now, that we have idea of scope. The scope of var, let and const.

// var declarations are function scoped.
// let declarations are block scoped.
// const declarations are block scoped.

