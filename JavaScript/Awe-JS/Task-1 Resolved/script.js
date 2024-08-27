const stickySection =[...document.querySelectorAll(.sticky)]
let images = [
    'https://www.artisaway.com/blog/childrens-self-portraits/',
    'img/fulchowki02.jpg',
    'img/fulchowki02.jpg',
]



images.forEach(img=>{
    stickySection.forEach(section=>{
        let image =document.createElement('img')
        images.src = img;
        section.querySelector('.scroll-section').appendChild(image)

    })
})

window.addEventListener('scroll',(e)=>{
    for (let i=0; i< stickySection.length; i++){
        TransformStream(stickySection[i])
        
    }
})

