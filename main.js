document.addEventListener("DOMContentLoaded", function () {
  // Création dynamique du bouton "Retour en haut"
  const scrollBtn = document.createElement("button");
  scrollBtn.id = "scrollTopBtn";
  scrollBtn.textContent = "Haut";
  document.body.appendChild(scrollBtn);

  // Retour en haut de la page lors du clic
  scrollBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Affichage du bouton après 200px de défilement
  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollBtn.classList.add("visible");
    } else {
      scrollBtn.classList.remove("visible");
    }
  });
});

// /Defilement/

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".section-img");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  ); // L'image s'affichera quand 20% de son contenu est visible

  images.forEach((img) => observer.observe(img));
});
