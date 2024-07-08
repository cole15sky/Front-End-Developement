// A prototype itself ia also another object.So, the prototype has its own prototype.This creates a prototype chain.
 
function Person(fName,lName){
 this.fName=fName,
 this.lName=lName
}
//So we cannot add the extra properties or methods like;
// Person.age 
// Therefore to add the another property or method in the constructor function after decleration we can hence use the prototype.

Person.prototype.gender ="Male";
const person1 =new Person('sky','soil');
const person2 =new Person('Billy','Joel');
console.log(person1);
//This is how we add the proptotype property and it will be inherited by all the objects.
//After the gender property is added person1 and person2 objects inherit the gender property from the constructor function prototype. 

//--------------Changing-prototype value-------------------------
function Human(){
    this.name ="Mariah"
} 
Human.prototype.age = 28;

const human1 =new Human();
Human.prototype ={age:52}
const human2 =new Human()

console.log(human1.age); //25
console.log(human2.age); //52

//Output for human1 and human2 goes 25 and 52 because if a prototype value is changed all the new objects will have the changed property value.
// All the previously created objects will have the previous value.  

