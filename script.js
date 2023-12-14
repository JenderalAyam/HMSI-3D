const navbar = document.getElementById('navbar');
const buttonMulai = document.getElementById('mulai');
const navLink = document.querySelector('.nav-links');
const hamButton = document.querySelector('.ham-button');
const closeNav = document.querySelector('.close-nav');
const navItem = document.getElementsByClassName('nav-item');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('nav-active');
  } else {
    navbar.classList.remove('nav-active');
  }
});

buttonMulai.addEventListener('click', function () {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth',
  });
});

hamButton.addEventListener('click', function () {
  navLink.classList.toggle('responsive_nav');
});

closeNav.addEventListener('click', function () {
  navLink.classList.toggle('responsive_nav');
});

for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener('click', function () {
    navLink.classList.toggle('responsive_nav');
  });
}
