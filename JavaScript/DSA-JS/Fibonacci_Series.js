
//--------------The Fibonacci series (or sequence) is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. The sequence typically starts like this:

// eg. 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ..

//Use online Compailer js to get the output.

const number = parseInt(prompt("enter the number of terms:"));
let n1 = 0,
n2 = 1,
nextTerm;

console.log("Fibonacci Series:");

for(let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;

}
