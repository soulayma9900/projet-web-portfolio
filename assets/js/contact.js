//att que html est chargé  
document.addEventListener("DOMContentLoaded", function () {
    // Validation du formulaire
    const form = document.querySelector(".email-form"); // selection l'element eli f classe email-form
    form.addEventListener("submit", function (event) { // lors de submit event execut les info 
      event.preventDefault(); // Empêche l'envoi du formulaire pour le test local
  
      // Récupération des champs   retourne une collection d'éléments,
      const name = document.getElementsByName("name")[0].value;
      const email = document.getElementsByName("email")[0].value;
      const subject = document.getElementsByName("subject")[0].value;
      const message = document.getElementsByName("message")[0].value;
      
      
  
      // Validation simple
      if (!name || !email || !subject || !message) {
        alert("Veuillez remplir tous les champs.");
        return;
      }
  
      if (!validateEmail(email)) {
        alert("Veuillez entrer une adresse email valide.");
        return;
      }
  
      // Affiche un message de confirmation
      alert("Merci, votre message a été envoyé.");

      form.reset(); // Réinitialise le formulaire
    });
  
    // Fonction pour valider l'email
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email); // test si email coorespond a l'expression regex 
    }
  
    // Défilement fluide vers les sections
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  });
  