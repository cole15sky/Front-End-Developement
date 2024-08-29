fetch('https://fakestoreapi.com/products')
.then(res => {
    if(res.ok) {
        console.log('SUCCESS')
    }
        else{
            console.log('NOT SUCCESS')

        }
    })
    
    
.then(data => console.log(data))
.catch(error => console.log('ERROR'))

