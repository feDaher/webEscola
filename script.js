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

const menu = document.querySelector('nav');

function activeScroll () {
  menu.classList.toggle('scroll', scrollY > 100)
}

window.addEventListener('scroll', activeScroll);

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