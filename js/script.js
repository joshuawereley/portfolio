let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
   menuIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active');
} 

/*
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
   sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 100;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
      if (top >= offset && top < offset + height) {
         navLinks.forEach(links => {
            links.classList.remove('actuve');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
         });
      }
   });

   let header = document.querySelector('header');
   header.classList.toggle('sticky', window.scrollY > 100);

   menuIcon.classList.remove('bx-x');
   navbar.classList.remove('active');
}
*/

const navLinks = document.querySelectorAll('.navbar a');
navLinks.forEach((link) => {
   link.addEventListener('click', (event) => {
      event.preventDefault();
      navLinks.forEach((navLink) => {
         navLink.classList.remove('active');
      });
      link.classList.add('active');
      const targetSection = link.getAttribute('href');
      const section = document.querySelector(targetSection);
      section.scrollIntoView({ behavior: 'smooth' });
   });
});

window.addEventListener('scroll', () => {
   const scrollPosition = window.scrollY;
   navLinks.forEach((link) => {
      const targetSection = link.getAttribute('href');
      const section = document.querySelector(targetSection);
      if (
         section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition
      ) {
         navLinks.forEach((navLink) => {
           navLink.classList.remove('active');
         });
         link.classList.add('active');
      }
      if (
         scrollPosition + window.innerHeight >= document.documentElement.scrollHeight
      ) {
         navLinks.forEach((navLink) => {
            navLink.classList.remove('active');
         });
         navLinks[navLinks.length - 1].classList.add('active');
      }
   });

   let header = document.querySelector('header');
   header.classList.toggle('sticky', window.scrollY > 100);

   menuIcon.classList.remove('bx-x');
   navbar.classList.remove('active');
});

