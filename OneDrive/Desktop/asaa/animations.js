
/**
 * Global Scroll Animations (Smooth Reveal)
 * Automatically animates elements with class 'reveal' when they enter viewport.
 */

document.addEventListener("DOMContentLoaded", () => {

    // 1. Setup Intersection Observer
    const observerOptions = {
        threshold: 0.15, // Trigger when 15% visible
        rootMargin: "0px 0px -50px 0px" // Trigger slightly before bottom
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                // Optional: Stop observing once revealed
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 2. Target elements to animate
    // Auto-apply to major sections if they don't have it explicitly
    const sections = document.querySelectorAll('section, .event-card, .footer-content, .hero, .contact-container, .profile-container, .events-container, .categories, .auth-container');

    sections.forEach((section, index) => {
        section.classList.add('reveal');
        // Add minimal staggered delay based on index (optional, implies sequential flow)
        // section.style.transitionDelay = `${index * 0.1}s`; 
        observer.observe(section);
    });

    // 3. Smooth Anchor Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    console.log("✨ Smooth animations initialized");
});
