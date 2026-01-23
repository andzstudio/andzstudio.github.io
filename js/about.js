// About Section Animations and Interactions
document.addEventListener('DOMContentLoaded', function() {
    // Initialize certifications slider
    initCertificationsSlider();
    
    // Initialize values slider
    initValuesSlider();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize button effects
    initButtonEffects();
});

// Certifications Slider
function initCertificationsSlider() {
    const certificationsContainer = document.querySelector('.certifications-container');
    const certificationCards = document.querySelectorAll('.certification-card');
    
    if (!certificationsContainer) return;
    
    // Duplicate cards for seamless loop
    certificationCards.forEach(card => {
        const clone = card.cloneNode(true);
        certificationsContainer.appendChild(clone);
    });
    
    // Pause on hover
    certificationsContainer.addEventListener('mouseenter', () => {
        certificationsContainer.style.animationPlayState = 'paused';
    });
    
    certificationsContainer.addEventListener('mouseleave', () => {
        certificationsContainer.style.animationPlayState = 'running';
    });
}

// Values Slider
function initValuesSlider() {
    const sliderTrack = document.querySelector('.slider-track');
    
    if (!sliderTrack) return;
    
    // Duplicate values for seamless loop
    const values = sliderTrack.innerHTML;
    sliderTrack.innerHTML = values + values;
    
    // Reset animation on loop
    sliderTrack.addEventListener('animationiteration', () => {
        // Smooth reset handled by CSS
    });
}

// Scroll Animations
function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Stagger children animations
                if (entry.target.classList.contains('content-grid')) {
                    const children = entry.target.children;
                    Array.from(children).forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.add('visible');
                        }, index * 200);
                    });
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// Button Effects
function initButtonEffects() {
    const buttons = document.querySelectorAll('.button-creative');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            button.style.setProperty('--x', `${x}px`);
            button.style.setProperty('--y', `${y}px`);
        });
        
        // Reset position when mouse leaves
        button.addEventListener('mouseleave', () => {
            button.style.setProperty('--x', '50%');
            button.style.setProperty('--y', '50%');
        });
    });
}

// Certification card interactions
function initCertificationInteractions() {
    const certificationCards = document.querySelectorAll('.certification-card');
    
    certificationCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
}

// Smooth scrolling for internal links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Parallax effect for background elements
function initParallax() {
    const aboutSection = document.getElementById('about');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.image-frame');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Initialize all functions
function initAboutSection() {
    initCertificationsSlider();
    initValuesSlider();
    initScrollAnimations();
    initButtonEffects();
    initCertificationInteractions();
    initSmoothScrolling();
    initParallax();
}

// Export for use in main app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initAboutSection };
} else {
    window.initAboutSection = initAboutSection;
}