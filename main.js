
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
 
window.onscroll = () =>{
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}



var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


  // Get the dropdown elements
  const dropdownBtn = document.querySelector('.dropdown');
  const dropdownContent = document.querySelector('.dropdown-content');

  // Add a click event listener to the button
  dropdownBtn.addEventListener('click', function() {
    dropdownContent.classList.toggle('show'); // Toggle the 'show' class
  });
