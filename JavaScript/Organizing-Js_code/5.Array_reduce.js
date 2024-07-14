const items =[
    { name:"Paddy",price: 10},
    { name:"Chicken",price: 20},
    { name:"Pork",price: 100}, 
]

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