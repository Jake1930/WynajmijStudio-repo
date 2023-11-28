let background = document.getElementById('parallax-background');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    background.style.top = value * 0.45 + 'px';
})

const preloader = document.querySelector('#preloader');

preloader.classList.add('show-preloader');

window.addEventListener('load', function () {
    setTimeout(function(){
        preloader.classList.remove('show-preloader');
    }, 100);
});