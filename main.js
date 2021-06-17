window.addEventListener('load', () => {
    let slides = document.querySelectorAll('.slide');

    slides.forEach(slide => {
        slide.addEventListener('click', function(){
            removeActive();
            this.classList.add('active');
        })
    })

    function removeActive(){
        if(document.querySelector('.slide.active')){
            document.querySelector('.slide.active').classList.remove('active')
        }
    }
})