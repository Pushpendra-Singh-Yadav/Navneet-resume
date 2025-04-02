document.addEventListener("DOMContentLoaded", function() {
    particlesJS("particles-js", {
        particles: {
            number: {
                value: window.innerWidth < 768 ? 50 : 100, // Adjust for mobile responsiveness
                density: { enable: true, value_area: 900 }
            },
            color: { value: ["#ff9800", "#ffdd40", "#ffffff", "#ff4081"] }, // Multiple colors
            shape: {
                type: ["circle", "star", "polygon"], // Variety of shapes
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 6 } // Hexagons
            },
            opacity: {
                value: 0.7,
                random: true,
                anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false }
            },
            size: {
                value: 4,
                random: true,
                anim: { enable: true, speed: 2, size_min: 0.3, sync: false }
            },
            move: {
                enable: true,
                speed: 1.5, // Slower for a more elegant effect
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: true, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" }, // Repel effect on hover
                onclick: { enable: true, mode: "bubble" }, // Bubble explosion on click
                resize: true
            },
            modes: {
                grab: { distance: 300, line_linked: { opacity: 0.5 } },
                bubble: { distance: 200, size: 8, duration: 2, opacity: 0.8, speed: 3 },
                repulse: { distance: 150, duration: 0.4 },
                push: { particles_nb: 4 }
            }
        },
        retina_detect: true
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    mobileMenu.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
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

function filterProjects(category) {
    let projects = document.querySelectorAll(".project-card");
    let buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    projects.forEach(project => {
        if (category === "all" || project.classList.contains(category)) {
            project.style.display = "block";
            setTimeout(() => project.style.opacity = "1", 100);
        } else {
            project.style.opacity = "0";
            setTimeout(() => project.style.display = "none", 300);
        }
    });
}