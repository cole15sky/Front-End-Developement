
//The function checkNumber takes a single argument: a number num. The function should return the string positive if the number is positive,
// negative if the number is negative, and zero if the number is zero.
//checkNumber(3)
//Answer: "positive"




function checkNumber(num){
    if(num > 0){
        console.log('Positive')
    }
    else if( num < 0){
        console.log('Negative')
    }
    else{
        console.log('Neutral')
    }
}

checkNumber(3);


//The function smallerNumber will be given two unequal numbers: num1 and num2.
// goal is to find the smaller number and return it!
//smallerNumber(3, 6);

//Answer: 3


function smallerNumber(num1,num2){
    if(num1 > num2){
        console.log(`${num2}`)
    }
    else{
        console.log(`${num1}`)
    }
}

smallerNumber(3,6);
