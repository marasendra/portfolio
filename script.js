document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("js-enabled");

  if (typeof particlesJS === "function") {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 60,
        },
        color: {
          value: "#0077B5",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.2,
        },
        size: {
          value: 3,
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#0077B5",
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
        },
      },
    });
  } else {
    console.warn("particles.js n'a pas été chargé.");
  }

  const bioElement = document.getElementById("bio-text");
  const phrases = [
    "Healthcare Data Scientist with 8+ years of experience.",
    "I turn messy clinical and RWE data into insights for clinicians.",
    "I build interpretable models that support better care decisions.",
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeBio() {
    if (!bioElement) {
      return;
    }

    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      charIndex -= 1;
    } else {
      charIndex += 1;
    }

    bioElement.textContent = currentPhrase.slice(0, charIndex);

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeBio, 2400);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeBio, 550);
      return;
    }

    const typingSpeed = isDeleting ? 50 : 110;
    setTimeout(typeBio, typingSpeed);
  }

  typeBio();

  const navLinks = document.querySelectorAll(".side-nav .nav-links a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });
  });

  const revealElements = document.querySelectorAll(".reveal-on-scroll");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    revealElements.forEach((element) => revealObserver.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }
});
