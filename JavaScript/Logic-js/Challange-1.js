
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