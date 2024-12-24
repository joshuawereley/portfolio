let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
   menuIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active');
} 


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

// Function to open modal
function openModal(modalId) {
   document.getElementById(modalId).style.display = "block";
   document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
}

// Function to close modal
function closeModal(modalId) {
   document.getElementById(modalId).style.display = "none";
   document.body.style.overflow = "auto"; // Re-enable scrolling
}

// Close modal when clicking outside of it
window.onclick = function(event) {
   if (event.target.classList.contains('modal')) {
       event.target.style.display = "none";
       document.body.style.overflow = "auto";
   }
}

// Close modal when pressing ESC key
document.addEventListener('keydown', function(event) {
   if (event.key === 'Escape') {
       const modals = document.getElementsByClassName('modal');
       for (let modal of modals) {
           if (modal.style.display === "block") {
               modal.style.display = "none";
               document.body.style.overflow = "auto";
           }
       }
   }
});

// Existing code...

// Add smooth scroll to logo
const logo = document.querySelector('.logo');
logo.addEventListener('click', (event) => {
   event.preventDefault();
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
});

// Scroll to top functionality
const scrollTop = document.querySelector('.scroll-top');

// Show scroll-to-top button when scrolling down
window.addEventListener('scroll', () => {
   // Existing scroll code...

   // Show/hide scroll-to-top button
   let sections = document.querySelectorAll('section');
   sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      
      if(top >= offset && top < offset + height) {
         if(sec.getAttribute('id') !== 'home') {
            scrollTop.classList.add('active');
         } else {
            scrollTop.classList.remove('active');
         }
      }
   });
});

// Scroll to top when clicking the button
scrollTop.addEventListener('click', () => {
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
   });
});