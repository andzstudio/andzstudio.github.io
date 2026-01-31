document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        const playPromise = heroVideo.play();
        if (playPromise !== undefined) {
            playPromise.then(_ => {}).catch(error => {
                heroVideo.muted = true;
                heroVideo.play();
            });
        }
        heroVideo.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    }
    const updateClock = () => {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        const clockEl = document.getElementById('ios-clock');
        if(clockEl) clockEl.textContent = timeString;
    };
    setInterval(updateClock, 1000);
    updateClock();
    const mainNav = document.getElementById('main-nav');
    
    const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 50) {
            mainNav.classList.add('scrolled');
        } else {
            mainNav.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});