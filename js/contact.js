document.addEventListener("DOMContentLoaded", () => {
    
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
        console.log("Firebase Connected via contact.js ✅");
    } else if (typeof firebase !== 'undefined' && firebase.apps.length) {
        window.db = firebase.firestore();
        console.log("Firebase already initialized, hooked into window.db");
    } else {
        console.warn("Firebase SDK not found!");
    }

    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = 0;
                }
            });

            if (isActive) {
                item.classList.remove('active');
                answer.style.maxHeight = 0;
            } else {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#contact",
            start: "top 70%",
        }
    });

    tl.from(".contact-header", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" })
      .from(".contact-form-box", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .from(".contact-right", { x: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6");

});

window.openGDPR = function() {
    const modal = document.getElementById('gdpr-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.classList.add('modal-open');
    }
}

window.closeGDPR = function() {
    const modal = document.getElementById('gdpr-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    }
}

function showContactNotification(message, type = 'error') {
    const container = document.getElementById('notification-container');
    if (!container) return;

    const notif = document.createElement('div');
    notif.className = `ios-notification ${type}`; 
    
    const iconHtml = type === 'success' 
        ? '<div class="notif-check">✓</div>' 
        : '<div class="notif-error-icon">!</div>';

    notif.innerHTML = `
        <img class="notif-icon" src="https://andzcr.github.io/resources/photos/andz-logo.png" alt="Icon">
        <div class="notif-content">
            <span class="notif-title">ANDZ Bot</span>
            <span class="notif-msg">${message}</span>
        </div>
        ${iconHtml}
    `;
    
    container.appendChild(notif);
    
    if (typeof gsap !== 'undefined') {
        gsap.fromTo(notif, 
            { y: 50, opacity: 0, scale: 0.9 }, 
            { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" }
        );
        setTimeout(() => {
            gsap.to(notif, { y: 20, opacity: 0, duration: 0.5, onComplete:()=>notif.remove() });
        }, 3000);
    } else {
        setTimeout(() => notif.remove(), 3000);
    }
}

async function submitContactForm(e) {
    e.preventDefault();
    
    const gdprCheck = document.getElementById('gdpr-consent');
    if(gdprCheck && !gdprCheck.checked) {
        showContactNotification("Please agree to the Terms of Service & Privacy Policy.", "error");
        return;
    }

    const btn = e.target.querySelector('.submit-btn');
    const originalText = btn.innerHTML;
    
    const email = document.getElementById('contact-email').value;
    const phone = document.getElementById('contact-phone').value;
    const category = document.querySelector('input[name="category"]:checked').value;
    const message = document.getElementById('contact-message').value;
    
    btn.innerHTML = 'Sending...';
    btn.style.opacity = '0.7';
    btn.disabled = true;

    try {
        if (!window.db) throw new Error("Database not connected");

        await window.db.collection('contacts').add({
            email: email,
            phone: phone,
            category: category,
            message: message,
            gdprConsent: true, 
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            platform: 'web'
        });

        showContactNotification("Message sent successfully! I'll be in touch.", "success");
        
        btn.innerHTML = 'Message Sent ✓';
        btn.style.background = '#22c55e';
        
        e.target.reset();

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            btn.style.opacity = '1';
            btn.disabled = false;
        }, 3000);

    } catch (error) {
        console.error("Error adding document: ", error);
        
        showContactNotification("Error sending message. Please try again.", "error");

        btn.innerHTML = 'Error. Try Again.';
        btn.style.background = '#ef4444';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            btn.style.opacity = '1';
            btn.disabled = false;
        }, 3000);
    }
}