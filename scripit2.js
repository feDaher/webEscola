const menu = document.querySelector('nav');

function activeScroll () {
  menu.classList.toggle('scroll', scrollY > 100)
}

window.addEventListener('scroll', activeScroll);


let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function (){
  nextImg();
}, 5000)

function nextImg () {
  count++
  if(count>5) {
    count = 1;
  }
  document.getElementById("radio"+count).checked = true;
}

class MobileNavbar {
  constructor(mobileMenu, navList){
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.activeClass = 'active';
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.navList.classList.toggle(this.activeClass);
  }
  addClickEvent() {
    this.mobileMenu.addEventListener('click', this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this
  }
}

const mobileNavbar = new MobileNavbar (
  ".mobile-menu",
  ".nav-list",
)

mobileNavbar.init();

const images = [
  './imagens/header1.jpg',
  './imagens/header2.jpg'
];

let currentIndex = 0;
const headerContainer = document.querySelector('.container');
const radioInputs = document.querySelectorAll('input[name="header-image"]');

function changeHeaderImage() {
  headerContainer.style.backgroundImage = `url('${images[currentIndex]}')`;
}

function handleRadioChange() {
  currentIndex = parseInt(this.value, 10) - 1;
  changeHeaderImage();
}

radioInputs.forEach((input, index) => {
  input.addEventListener('change', handleRadioChange);
  input.value = index + 1;
});

changeHeaderImage();

let counter = 1;
document.getElementById("image1").checked = true;

setInterval(function() {
  counter++;
  if (counter > 2) {
    counter = 1;
  }
  document.getElementById("image" + counter).checked = true;
  handleRadioChange.call({ value: counter });
}, 5000);
