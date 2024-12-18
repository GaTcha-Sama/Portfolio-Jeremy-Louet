// Affichage projets bouton "En savoir plus"-"Réduire" //

document.addEventListener("DOMContentLoaded", function() {
    let buttonsMore = document.querySelectorAll("#more");
    let descriptions = document.querySelectorAll(".services-description");

    buttonsMore.forEach((button, index) => {
        button.addEventListener("click", function(e) {
            e.stopPropagation();

            // Obtenir la description correspondante au bouton cliqué
            let currentDescription = descriptions[index];

            if (currentDescription.style.display === "none" || currentDescription.style.display === "") {
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
        strings: ['Développeur Full Stack', 'Développeur React/Python', 'Développeur Symfony'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});

// Toggle icon navbar //

document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    };
});

// MODALE //

document.addEventListener("DOMContentLoaded", function() {
  // Get all portfolio boxes
  const portfolioBoxes = document.querySelectorAll(".portfolio-box");

  // Add click event to each portfolio box to open the corresponding modal
  portfolioBoxes.forEach(box => {
      box.addEventListener("click", function() {
          const projectName = this.querySelector("h4").textContent.trim().toLowerCase().replace(/\s+/g, '-');
          const modalId = `modal-${projectName}`;
          const modal = document.getElementById(modalId);
          if (modal) {
              modal.style.display = "block";
          } else {
              console.log(`No modal found for ${projectName}`);
          }
      });
  });

  // Get all close buttons
  const closeButtons = document.querySelectorAll(".close");

  // Add click event to each close button to close the modal
  closeButtons.forEach(button => {
      button.addEventListener("click", function() {
          const modalId = this.getAttribute('data-modal');
          const modal = document.getElementById(modalId);
          if (modal) {
              modal.style.display = "none";
          }
      });
  });

  // Close the modal if the user clicks outside of the modal
  window.addEventListener("click", function(event) {
      if (event.target.classList.contains('modal')) {
          event.target.style.display = "none";
      }
  });
});
