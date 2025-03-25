const words = ["Bonjour", "Hello", "Hola", "Ciao", "Guten Tag", "Namaste", "Konnichiwa"];
const element = document.getElementById("dynamic-word");
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
    const fullWord = words[wordIndex];
    
    if (!isDeleting) {
        // Ajoute une lettre à chaque fois
        letterIndex++;
        element.innerHTML = fullWord.substring(0, letterIndex) + "<span class='cursor'>|</span>";

        if (letterIndex === fullWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500); // Pause avant suppression
            return;
        }
    } else {
        // Supprime une lettre à chaque fois
        letterIndex--;
        element.innerHTML = fullWord.substring(0, letterIndex) + "<span class='cursor'>|</span>";

        if (letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    // Temps d'attente avant la prochaine action (écriture + rapide que suppression)
    setTimeout(typeEffect, isDeleting ? 100 : 150);
}

// Lancer l'animation
setTimeout(typeEffect, 1000);
