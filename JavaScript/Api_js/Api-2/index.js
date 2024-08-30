const button = document.querySelector('.btn');

const clickHandler =() =>{
   fetch('https://fakestoreapi.com/products')
   .then(res =>{
    console.log(res);

   })
}


button.addEventListener('click',clickHandler);