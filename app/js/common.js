(function () {
    const hamburger = document.querySelector('.hamburger')
    const headerMenu = document.querySelector('.js-menu')

    hamburger.addEventListener('click', function () {
       this.classList.toggle('is-active')
       headerMenu.classList.toggle('is-open')
    }, false)

    let splide = new Splide( '.splide', {
        type: 'loop',
        pagination: false,
        perPage: 3,
        perMove: 1,
        width: 1100,
        gap: 40,
        padding: 50,
        breakpoints: {
            768: {
                perPage: 2
            },
            559: {
                perPage: 1
            }
        }
    }  );
    splide.mount();
})();
