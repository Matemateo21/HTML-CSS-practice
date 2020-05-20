const hamburger = document.querySelector('button')
const nav = document.querySelector('nav');
const menuOpen = () => {
    hamburger.classList.toggle('hamburger--active');
    nav.classList.toggle('nav--active');
}
hamburger.addEventListener('click', menuOpen);