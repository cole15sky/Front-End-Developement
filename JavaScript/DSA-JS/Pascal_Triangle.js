
//Pascal's Triangle
//Pascal's Triangle is a triangular array of numbers where each number is the sum of the two directly above it.



for(let i = 1; i <= 5; i++){
    let line = ""
    for(let l = 5; l>=i; l--){
        line += "";
    }

    let k =1;
    for(let j =1; j<= i; j++){
        line += "" + k;
        k = (k*(i-j)) / j;

    }

    console.log(line)
}