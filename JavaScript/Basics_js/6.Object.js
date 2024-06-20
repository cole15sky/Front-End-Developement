


//  Everything in js is an object.
// Creating object in JS;
// 1. By object literal.
//  Syntax:
//  object={property1:value1,property2:value2.....propertyN:valueN}
//  Eg; 
emp={id:102,name:"Shyam Kumar",salary:40000}  
document.write(emp.id+" "+emp.name+" "+emp.salary);  
//  (output: 102 Shyam Kumar 40000)

// 2.By creating instance of object directly (using new keyword)
// Here new keyword is used to create object.
// syntax;
// var objectname=new Object();  
// eg. 
var emp=new Object();  
emp.id=101;  
emp.name="Ravi Malik";  
emp.salary=50000;  
document.write(emp.id+" "+emp.name+" "+emp.salary);  
//  (output; 101 Ravi 50000)

// 3.By using constructor (using new keywords)
// We need to create function with arguments. Each arguments value can be assisgned in the current objet by using keyword.
// The this is refers to the currernt object.
//eg  
function emp(id,name,salary){  
this.id=id;  
this.name=name;  
this.salary=salary;  
}  
e=new emp(103,"Vimal Jaiswal",30000);  
document.write(e.id+" "+e.name+" "+e.salary);  











//=====================MORE INFO===========================



function multipleBy5(num){

    return num*5
}

multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);
}

const pizza = new createUser("pizza", 25)
const bread = createUser("flur", 250)

pizza.printMe()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/


