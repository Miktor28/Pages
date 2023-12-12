document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('.transparent-header');
    var parallaxN = document.querySelector('.parallax-overlay');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'black';
        } else {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
        }
    });

    
    function toggleMenu() {
        var navUl = document.querySelector('.header nav ul');
        navUl.classList.toggle('show');
    }

    var menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMenu);
    }

    document.getElementById('loginButton').addEventListener('click', function(event) {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        console.log("Email:", email);
        console.log("Password:", password);

        checkRegistration();
    });

});
document.addEventListener('DOMContentLoaded', function () {
    const scrollLinks = document.querySelectorAll('.scroll-link');
    scrollLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });