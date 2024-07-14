const items =[
    { name:"Paddy",price: 10},
    { name:"Chicken",price: 20},
    { name:"Pork",price: 100}, 
]
// The reduce() method executes a reducer function for array element 
//The reduce () method returns a single value: the fucntion's accumulated result.
// The reduce () method does not exdcute the function for empty array elements.
// THe rediuce() method doesnot change the orignal array.



// =========================NOTE========================
//At the first callback, there is no return value from the previous callback.\
//Normally, array element 0 is used as initial value, and the iteration starts from array element 1.\
//If an initial value is supplied, this is used, and the iteration starts from array element 0.


// let totalPrice =0;
// items.foreach(items =>{
//     totalPrice += items.price
// })


const totalPrice =items.reduce( (total,item) =>{
    console.log(`Total:${total}`)
    console.log(`Total:${item.price}`)
    return total + item.price

},0)
console.log(totalPrice)