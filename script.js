const scrollUpBtn = document.getElementById("scrollUpBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
}


scrollUpBtn.addEventListener('click', function() {
    document.body.scrollTop = 0;        // For Safari
    document.documentElement.scrollTop = 0;    // For Chrome, Firefox, IE and Opera
});

// navbar

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const closeMenu = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    
    navToggle.addEventListener('click', function() {
      mobileMenu.classList.remove('-translate-x-full');
      mobileMenu.classList.add('translate-x-0');
    });

    closeMenu.addEventListener('click', function() {
      mobileMenu.classList.remove('translate-x-0');
      mobileMenu.classList.add('-translate-x-full');
    });
  });