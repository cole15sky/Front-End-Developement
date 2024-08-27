

const container = document.querySelector('.scroll-container');
container.addEventListener('wheel', (e) => {
    e.preventDefault();
    container.scrollLeft += 1000;
});




