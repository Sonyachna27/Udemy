const closed = document.getElementById('close');
const opening = document.getElementById('open');
const container = document.querySelector('.container');

opening.addEventListener('click', () => {
    container.classList.add('show-nav')
    opening.classList.add('open')
    closed.style.display = 'block';
})
closed.addEventListener('click', () => {
    container.classList.remove('show-nav')
    opening.classList.remove('open')
    closed.style.display = 'none';
} )
const image = document.querySelectorAll('.images');
image.forEach((images) => {
    images.addEventListener('click', () => {
        
        removeActiveClass()
       images.classList.add('active')
       
    })
    
})

function removeActiveClass() {
    image.forEach(images => {
        images.classList.remove('active')
    })
}
