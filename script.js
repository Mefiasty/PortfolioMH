// Nawigacja mobilna
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Zamknij menu po kliknięciu w link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Aktywny link w nawigacji
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const scrollPos = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");
    const correspondingLink = document.querySelector(`a[href="#${sectionId}"]`);

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navLinks.forEach((link) => link.classList.remove("active"));
      if (correspondingLink) {
        correspondingLink.classList.add("active");
      }
    }
  });
});

// Animacje przy przewijaniu
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-up");
    }
  });
}, observerOptions);

// Obserwuj elementy do animacji
document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(
    ".project-card, .timeline-item, .skill-item"
  );
  elementsToAnimate.forEach((el) => observer.observe(el));
});

// Formularz kontaktowy
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Pobierz dane z formularza
    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Utwórz link mailto
    const mailtoLink = `mailto:freshminter@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Imię: ${name}\nEmail: ${email}\n\nWiadomość:\n${message}`
    )}`;

    // Otwórz klienta email
    window.location.href = mailtoLink;

    // Pokaż komunikat
    showNotification("Dziękuję za wiadomość! Otworzy się Twój klient email.");

    // Wyczyść formularz
    contactForm.reset();
  });
}

// Funkcja do pokazywania powiadomień
function showNotification(message) {
  // Utwórz element powiadomienia
  const notification = document.createElement("div");
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
  notification.textContent = message;

  document.body.appendChild(notification);

  // Animacja wejścia
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Usuń po 5 sekundach
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 5000);
}

// Płynne przewijanie dla starszych przeglądarek
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 70; // Uwzględnij wysokość nawigacji
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Efekt paralaksy dla sekcji hero (opcjonalny)
// window.addEventListener("scroll", () => {
//   const scrolled = window.pageYOffset;
//   const hero = document.querySelector(".hero");
//   if (hero && scrolled < hero.offsetHeight) {
//     hero.style.transform = `translateY(${scrolled * 0.1}px)`;
//   }
// });

// Animacja pisania tekstu (opcjonalna)
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Licznik animowany (opcjonalny)
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    element.textContent = Math.floor(current);

    if (current >= target) {
      element.textContent = target;
      clearInterval(timer);
    }
  }, 16);
}

// Inicjalizacja po załadowaniu strony
document.addEventListener("DOMContentLoaded", () => {
  // Dodaj klasę loaded do body
  document.body.classList.add("loaded");

  // Inicjalizuj animacje liczników jeśli istnieją
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-target"));
    if (target) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(counter, target);
            observer.unobserve(counter);
          }
        });
      });
      observer.observe(counter);
    }
  });
});

// Obsługa błędów JavaScript
window.addEventListener("error", (e) => {
  console.error("JavaScript error:", e.error);
});

// Preloader (opcjonalny)
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }
});
