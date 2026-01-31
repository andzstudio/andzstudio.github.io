const firebaseConfig = {
    apiKey: "AIzaSyC0DShqS1R3eqCIVFLKXxU0vmi0mUqprek",
    authDomain: "portfolio-65392.firebaseapp.com",
    projectId: "portfolio-65392",
    storageBucket: "portfolio-65392.firebasestorage.app",
    messagingSenderId: "494719104051",
    appId: "1:494719104051:web:445c9ec94535e16b4adf46"
};

if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    window.db = firebase.firestore();
}

window.showNotification = function(message) {
    const container = document.getElementById('notification-container');
    if (!container) return; 

    const notif = document.createElement('div');
    notif.className = 'ios-notification';
    notif.innerHTML = `
        <div class="notif-icon-check">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <div class="notif-content">
            <span class="notif-title">Success</span>
            <span class="notif-msg">${message}</span>
        </div>
        <div class="notif-glow"></div>
    `;
    container.appendChild(notif);

    gsap.fromTo(notif, 
        { x: 50, opacity: 0, scale: 0.9 },
        { x: 0, opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.2)" }
    );

    setTimeout(() => {
        gsap.to(notif, {
            x: 50, opacity: 0, duration: 0.3, onComplete: () => notif.remove()
        });
    }, 4000);
};

function adjustFooterSpacing() {
    const footer = document.getElementById('mega-footer');
    const content = document.getElementById('site-content');
    if (footer && content) {
        const footerHeight = footer.offsetHeight;
        content.style.marginBottom = `${footerHeight}px`;
    }
}

const lenis = new Lenis({ 
    duration: 1.2, 
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
    smooth: true 
});

lenis.on('scroll', ScrollTrigger.update);
lenis.on('scroll', (e) => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (e.animatedScroll / totalHeight) * 100;
    gsap.set('.site-progress-bar', { width: progress + '%' });
});

gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const menuOverlay = document.getElementById('menu-overlay');
                if (menuOverlay && menuOverlay.classList.contains('active')) {
                    if (typeof window.toggleMenu === 'function') {
                        window.toggleMenu();
                    }
                }

                if (window.lenis) {
                    window.lenis.scrollTo(targetSection, { offset: 0, duration: 1.2 });
                } else {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
    adjustFooterSpacing();

    const tl = gsap.timeline();
    
    tl.to('.logo-liquid-mask', { height: '100%', duration: 2, ease: 'power2.inOut' })
      .to('.logo-loader-container', { scale: 1.15, duration: 0.4, ease: 'back.in(1.7)' })
      .to('.logo-loader-container', { opacity: 0, duration: 0.3 }, "-=0.2")
      .to('.preloader', { y: '-100%', duration: 0.8, ease: 'expo.inOut' }, "-=0.1");

    if (document.querySelector('.hero-anim')) {
        tl.to('.hero-anim', { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out' }, "-=0.4");
    }

    const projectCards = document.querySelectorAll('.work-card');
    const viewMoreBtn = document.querySelector('.view-more-card');
    if (projectCards.length <= 2 && viewMoreBtn) {
        viewMoreBtn.style.display = 'none';
    }
});

window.addEventListener('resize', adjustFooterSpacing);

const manifestoLines = document.querySelectorAll('.manifesto-line');
manifestoLines.forEach(line => {
    gsap.to(line, {
        backgroundPosition: "0% 0", 
        ease: "none",
        scrollTrigger: {
            trigger: line,
            start: "top 80%",
            end: "bottom 40%",
            scrub: 1
        }
    });
});

const videoCards = document.querySelectorAll('.work-card');
videoCards.forEach(card => {
    const video = card.querySelector('video');
    if(video) {
        card.addEventListener('mouseenter', () => video.play());
        card.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    }
});

const cookieSystem = {
    storageKey: 'edg_cookies_accepted',
    overlay: null,
    card: null,

    init() {
        this.createMarkup();

        this.overlay = document.getElementById('cookie-overlay');
        this.card = document.getElementById('cookie-card');

        if (!localStorage.getItem(this.storageKey)) {
            setTimeout(() => this.show(), 1000);
        }
    },

    createMarkup() {
        const markup = `
            <div id="cookie-overlay">
                <div id="cookie-card">
                    <div class="cookie-image-container">
                        <img src="https://andzcr.github.io/resources/photos/cookies.png" alt="Cookies">
                    </div>
                    <div class="cookie-content">
                        <h2 class="cookie-title">Unfortunately, I don't own a bakery</h2>
                        <p class="cookie-description">
                            But we do use cookies to provide you with the smoothest digital experience possible. These help us analyze traffic, remember your preferences, and ensure our design "gravitates" correctly around your needs. By continuing to browse, you agree to our data policy.
                        </p>
                        <div class="cookie-actions">
                            <button class="cookie-btn btn-more" onclick="window.open('https://www.cookiesandyou.com/', '_blank')">Find More</button>
                            <button class="cookie-btn btn-accept" id="cookie-accept-btn">Accept</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', markup);

        document.getElementById('cookie-accept-btn').addEventListener('click', () => this.accept());
    },

    show() {
        document.body.classList.add('no-scroll');
        
        if (window.lenis) window.lenis.stop();
        if (typeof lenis !== 'undefined' && lenis.stop) lenis.stop();

        this.overlay.style.display = 'flex';

        const tl = gsap.timeline();
        
        tl.to(this.overlay, {
            backdropFilter: "blur(15px)",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            duration: 1.2,
            ease: "power2.out"
        });

        tl.to(this.card, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "elastic.out(1, 0.8)"
        }, "-=0.8");
    },

    accept() {
        localStorage.setItem(this.storageKey, 'true');

        const tl = gsap.timeline({
            onComplete: () => {
                this.overlay.style.display = 'none';
                document.body.classList.remove('no-scroll');
                
                if (window.lenis) window.lenis.start();
                if (typeof lenis !== 'undefined' && lenis.start) lenis.start();
            }
        });

        tl.to(this.card, {
            opacity: 0,
            y: 100,
            scale: 0.9,
            duration: 0.6,
            ease: "power2.in"
        });

        tl.to(this.overlay, {
            backdropFilter: "blur(0px)",
            backgroundColor: "rgba(0, 0, 0, 0)",
            duration: 0.5
        }, "-=0.3");
    }
};

window.addEventListener('DOMContentLoaded', () => {
    cookieSystem.init();
});