//Conditional Statements;

//conditional statements are used to execute different actions based on different conditons.

// if statements
// In js if statements is to execute a block of code if the condition is true.
//eg.1
if(true){
    console.log("sky is executed");
}
// if the false is determined between the paranthesis the code will not execute.
//eg.2
// let age =20;
// if (age>18){
//     console.log("You are adult")
// }

//eg.3
//  let country ="Nepal";
//  let totallang =30;
//  if (totallang>=18 && country == Nepal){
//     console.log("I'm Nepali")
//  }




// if else statements
//use to execute a block of code if the conditions is true and another block of code if the condition is false.
//eg.1

let age = 16;
if(age>18){
    console.log("you are being matured");
}

else if(age>=16){
    console.log("you are teenager");
}

else{
    console.log("you are baby")

}


//Switch
//The switch in js is cond.statement that is used to execute a block of code based on the value of an expression.
let value =42;
switch (typeof value) {
    case "number":
        console/log("Number")
        break;
    case "string":
        console/log("string")
        break;
    case "boolean":
        console/log("boolean")
        break;

    default:
        console.log("other");
        break;
}

 




 