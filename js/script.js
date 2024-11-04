let navbarDiv = document.querySelector('.nav-tiswan');
window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    navbarDiv.classList.add('nav-cng');
  } else {
    navbarDiv.classList.remove('nav-cng');
  }
});

const list = document.getElementById('under-list-tiswan');
const menu = document.getElementById('nav-show-btn-tiswan');
const close = document.getElementById('nav-close-btn-tiswan');

menu.addEventListener('click', () => {
  list.classList.add('active');
});

close.addEventListener('click', () => {
  list.classList.remove('active');
});
