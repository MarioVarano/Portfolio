const header = document.querySelector("header");
// Seleziona il bottone e il contenitore del menu
const menuToggle = document.querySelector('.menu-toggle'); // Bottone per aprire il menu
const menuLinks = document.querySelector('.menu-links'); // Menu a tendina
const chiudi = document.querySelector('.chiudi'); // Pulsante X per chiudere il menu



// Inizializza EmailJS per inviare il form
emailjs.init("rpm03zeG7PHQISZ7-");  // Sostituisci con il tuo User ID di EmailJS

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();  // Impedisce il comportamento di default del form

  emailjs.sendForm("service_k4kztle", "template_w09h3zy", this)  // Sostituisci con il tuo Service ID e Template ID
    .then(function(response) {
      alert("Messaggio inviato con successo!");  // Successo
      document.getElementById("contact-form").reset();  // Resetta il modulo
    }, function(error) {
      alert("Errore: " + JSON.stringify(error));  // Mostra errore
    });
});
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


window.addEventListener("scroll", function () {
    // Controlla se l'header è nascosto
    if (getComputedStyle(header).display === "none") {
        // Applica la classe di scrolled al menu a tendina
        if (window.scrollY > 50) {
            menuLinks.classList.add("scrolled");
        } else {
            menuLinks.classList.remove("scrolled");
        }
    } else {
        // Applica la classe di scrolled all'header
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }
});



// Selettore per il pulsante
const darkModeToggles = document.querySelectorAll(".dark-mode-toggle");
const navbar = document.querySelector("nav");

// Aggiunge un listener al pulsante per attivare/disattivare la modalità notturna
function toggleDarkMode() {
    // Cambia la modalità notturna per il body
    document.body.classList.toggle("dark-mode");

    // Aggiorna l'icona in tutte le occorrenze
    darkModeToggles.forEach((toggle) => {
        const icon = toggle.querySelector("i");
        if (document.body.classList.contains("dark-mode")) {
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        } else {
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
    });

    // Cambia lo stile della navbar o del menu a tendina
    updateNavbarStyle();
}

// Funzione per aggiornare lo stile di navbar e menu durante lo scroll
function updateNavbarStyle() {
    const headerVisible = window.getComputedStyle(header).display !== "none";

    if (document.body.classList.contains("dark-mode")) {
        // Applica dark-scrolled sia all'header che a menu-links
        header.classList.add("dark-scrolled");
        header.classList.remove("scrolled");

        menuLinks.classList.add("dark-scrolled");
        menuLinks.classList.remove("scrolled");
    } else {
        // Rimuovi dark-scrolled e applica scrolled sia all'header che a menu-links
        header.classList.add("scrolled");
        header.classList.remove("dark-scrolled");

        menuLinks.classList.add("scrolled");
        menuLinks.classList.remove("dark-scrolled");
    }
}



console.log(menuLinks.classList.contains("dark-scrolled")); // Dovrebbe stampare true se la classe è applicata



// Aggiungi un listener a ciascuna icona
darkModeToggles.forEach((toggle) => {
    toggle.addEventListener("click", toggleDarkMode);
});




// Mostra il menu al clic sul bottone
menuToggle.addEventListener('click', () => {
    menuLinks.classList.add('active'); // Aggiunge la classe 'active'
    header.classList.add('none'); // Aggiunge la classe '
});

// Nascondi il menu al clic sulla "X"
chiudi.addEventListener('click', () => {
    menuLinks.classList.remove('active'); // Rimuove la classe 'active'
    header.classList.remove('none'); // Rimuove la classe 'none'
});





