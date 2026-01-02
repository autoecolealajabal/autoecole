// Header Scroll Effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Reveal on Scroll
const revealElements = document.querySelectorAll('[data-reveal]');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
                entry.target.classList.add('revealed');
            }, delay);
            // revealObserver.unobserve(entry.target); // Optional: keep observing if you want it to re-animate
        }
    });
}, {
    threshold: 0.1
});

revealElements.forEach(el => revealObserver.observe(el));

// Mobile Menu Toggle (Simplified)
const navToggle = document.querySelector('#nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        // In a real app, we would add a mobile-active class and style it in CSS
        alert('Menu Mobile en cours de développement - Le design luxe se concentre sur le desktop pour le moment.');
    });
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Announcement Modal
const modal = document.getElementById('announcement-modal');
const closeModal = document.querySelector('.close-modal');

if (modal) {
    // Show modal after 1.5 seconds
    setTimeout(() => {
        modal.classList.add('active');
        // Trigger animation for modal content
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) modalContent.classList.add('revealed');
    }, 1500);

    // Close on 'X' click
    if (closeModal) {
        closeModal.onclick = function () {
            modal.classList.remove('active');
        }
    }

    // Close on outside click
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.classList.remove('active');
        }
    }
}

console.log('Auto École Aljabal Azilal - Luxury Experience Loaded');
