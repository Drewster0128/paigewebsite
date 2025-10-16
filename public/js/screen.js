let isMobile = false;

window.addEventListener('load', function() {
    //check if in mobile mode
    if(this.window.innerWidth <= 576)
    {
        this.document.querySelector('.title_page__img').outerHTML = `<img class="title_page__img" src="/images/9x16/boat.JPG">`;
        isMobile = true;
    }
    else
    {
        this.document.querySelector('.title_page__img').outerHTML = `<img class="title_page__img" src="/images/16x9/boat.JPG">`;
    }
})

window.addEventListener('resize', function () {
    if(window.innerWidth <= 576 && !isMobile)
    {
        //change background image for home screen to 9x16 version
        this.document.querySelector('.title_page__img').outerHTML = `<img class="title_page__img" src="/images/9x16/boat.JPG">`;
        isMobile = true;
    }
    else if(this.window.innerWidth > 576 && isMobile)
    {
        this.document.querySelector('.title_page__img').outerHTML = `<img class="title_page__img" src="/images/16x9/boat.JPG">`;
        isMobile = false;
    }
})