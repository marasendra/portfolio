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

const bioElement = document.getElementById("bio-text");
const phrases = [
  "Data Scientist with 8+ years of experience.",
  "From raw data to decision-ready insights.",
  "I design AI-driven solutions that optimize workflows.",
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeBio() {
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
