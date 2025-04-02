// Particle.js Background
particlesJS("particles-js", {
    particles: {
        number: { value: 80 },
        size: { value: 3 },
        move: { speed: 2 }
    }
});

// Smooth Scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Scroll Animation
const sections = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionPos = section.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;
        if (sectionPos < screenPos) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
});

/* Navbar Shrinking Effect on Scroll */
window.onscroll = function() {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.padding = "10px 40px";
        header.style.background = "rgba(10, 10, 10, 0.95)";
    } else {
        header.style.padding = "15px 50px";
        header.style.background = "rgba(20, 20, 20, 0.9)";
    }
};
// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Navbar Shrinking Effect on Scroll
window.addEventListener("scroll", () => {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.padding = "10px 40px";
        header.style.background = "rgba(10, 10, 10, 0.95)";
    } else {
        header.style.padding = "15px 50px";
        header.style.background = "rgba(20, 20, 20, 0.9)";
    }
});
// Form Validation
const form = document.querySelector("form");

// Animate Progress Bars on Scroll
document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.dataset.width || entry.target.style.width;
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(progress => observer.observe(progress));
});

