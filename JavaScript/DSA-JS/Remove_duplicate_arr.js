


let arr =[ 1,2,2,2,2,3,3,4,5,6,7,8,9,9,8,6];

let result = arr.filter((value,index) => {
    return arr.indexOf(value) == index;
});
console.log(result);
