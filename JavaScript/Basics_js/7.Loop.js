
/*********** loops ********************/

// // for loop

// console.log('for loop')
// for(let i=1; i<10;i++){
//     // ** to square
//     console.log(i**2)
// }

// // while loop
// console.log('While loop')
// let count =10
// while(count >0){
//     console.log(count)
//     count = count -1
// }

// // do while

// // Execute once before conditon checked
// console.log('Do while')
// let i =1
// do{
//     console.log(i)
//     i++
// }
// while(i<10)



// // for in loop---------------

// // person is object
// let person ={
//     fname:"John",
//     lname:"Doe",
//     age:25
// }
// let x;
// for (x in person){
//     console.log(x)
//     console.log(person[x])
// }


// // for each loop------------------

// Reassigning value to any variables shows error in javascript
// let fruits = ['mango','ornage','banana']
// fruits.forEach(function(value){
//     console.log(value)
// })

// let fruits = ['mango','ornage','banana']
// fruits.forEach(function(value,index){
//     console.log(index)
//     console.log(value)
// });

//  // Alternative approach of forEach
// names = ['sky','aakash','cole']
// names.forEach(i =>console.log(i))



/*---------------- switch ------------------*/

// function getSwitchResult(){
//     let age = new Date()
//     // document.write(age)
//     // document.write(age.getDay())
//     // document.write(age.getDay().toString())
// toString() converts to string type
//     switch(age.getDay().toString()){
//         case '0':
//             document.write("Sunday")
//             break;

//         case '1':
//             document.write("Monday")
//             break;

//         case '2':
//             document.write("Tuesday")
//             break;

//         case '3':
//             document.write("Wednesday")
//             break;

//         case '4':
//             document.write("Thursday")
//             break;

//         case '5':
//             document.write("Friday")
//             break;

//         case '6':
//             document.write("Saturday")
//             break;

//         default:
//         document.write('Error')

//     }
// }
