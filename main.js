const menu = document.querySelector('nav');

function activeScroll () {
  menu.classList.toggle('scroll', scrollY > 150);
}

window.addEventListener('scroll', activeScroll);