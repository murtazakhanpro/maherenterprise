// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = navToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = navToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// Parallax effect for hero
window.addEventListener('scroll', () => {
    const heroBg = document.querySelector('.hero-bg');
    if (heroBg) {
        let offset = window.pageYOffset;
        heroBg.style.transform = `scale(${1.1 + offset * 0.0005}) translateY(${offset * 0.4}px)`;
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Target elements for animation
document.querySelectorAll('.service-card, .about-content, .section-title, .team-card, .cta-content, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Back to Top Visibility
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
// Split-screen Hero Interaction
const heroLeft = document.querySelector('.hero-left');
const heroRight = document.querySelector('.hero-right');

if (heroLeft && heroRight) {
    heroLeft.addEventListener('mouseenter', () => {
        heroLeft.style.width = '60%';
        heroRight.style.width = '40%';
    });
    heroLeft.addEventListener('mouseleave', () => {
        heroLeft.style.width = '50%';
        heroRight.style.width = '50%';
    });

    heroRight.addEventListener('mouseenter', () => {
        heroRight.style.width = '60%';
        heroLeft.style.width = '40%';
    });
    heroRight.addEventListener('mouseleave', () => {
        heroRight.style.width = '50%';
        heroLeft.style.width = '50%';
    });
}
