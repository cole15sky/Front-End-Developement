// function Person(){
//     this.firstName ="sky",
//     this.lastName ="cool"
// }
 // when new object is created using constructor function (this) keyword will refer to the newly created object. 
// const person1 =new Person();
// const person2 =new Person();

// console.log(person1);
// console.log(person2);

// --------------------------------------------------------------------------
function Person(first,last){
    this.firstName ="first",
    this.lastName ="last",
    //Adding methods in constructor function.
    this.getFullName = function(){
        return this.firstName + "" +this.lastName
    }

}
//to access the method.
console.log(person1.getFullName());

// to call the constructor function we pass two arguments so this J will be there first and this first will  be stored as a value in this first name property similarly cole will replace the value for the lastName property.
const person1 =new Person("J","cole");
const person2 =new Person("Billy","Joel");

// console.log(person1);
// console.log(person2);

//when we are creating person1 it will create object with the property firstName and lastName and the value is J Cole similarly for person2 as value Billy Joel.
// Multiple object of same type can be created with the constructorn function.

// Adding the property in person1 object
person1.age = 22;
console.log(person1);

// Adding the method in person2.
// Method = function declaration inside property.

person2.greet= function(){
    console.log("hey,sky");
}
person2.greet();


// --------------CONCLUSION------------------
// The problem with the constructor function is that when we create new object  using constructor function the same method will be created in all the objects created using this constructor function which is not memory efficient. To resolve this;
// We can use the prototype of the object so that all object created from this person constructor fn will share this same method.