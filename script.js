// Affichage projets bouton "En savoir plus"-"Réduire" //

document.addEventListener("DOMContentLoaded", function() {
    let buttonMore = document.querySelectorAll("#more");
    let description = document.querySelectorAll(".services-description");
  
    buttonMore.forEach((button, index) => {
      button.addEventListener("click", function(e) {
        console.log(e, "bouton cliqué");
        e.stopPropagation();

        // Obtenir la description correspondante au bouton cliqué
        let currentDescription = description[index];
  
        if (currentDescription.style.display === "none") {
          currentDescription.style.display = "block";
          button.textContent = "Réduire";
        } else {
          currentDescription.style.display = "none";
          button.textContent = "En savoir plus";
        }
        
      });
    });
});

// Pour le scroll des sections //

document.addEventListener("DOMContentLoaded", function() {

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a'); 

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

// Pour la navbar //

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

// Remove toggle icon and navbar au click sur la navbar lors du scroll //

    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.classList.remove('.fa-xmark');
    navbar.classList.remove('active');

}; 

// Scroll reveal des différentes sections //

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1000,
    delay: 200
})

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .techno-box, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .home-content li, .about-content', {origin: 'right'}); 

// Défilement texte de présentation //

    const typed = new Typed('.multiple-text', {
        strings: ['Développeur Web et Mobile', 'Développeur Back End', 'un futur Ingénieur Full Stack'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });



});

// Toggle icon navbar //

let menuIconBar = document.querySelector('#menu-icon');
let menuIconX = document.querySelector('fa-xmark');
let navbar = document.querySelector('.navbar');

menuIconBar.onclick = () => {
    menuIconBar.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
    navbar.style.display = "block";
};

 menuIconX.onclick = () => {
    menuIconX.classList.toggle('fa-bars');
    navbar.classList.toggle('inactive');
    navbar.style.display = "none";    
};