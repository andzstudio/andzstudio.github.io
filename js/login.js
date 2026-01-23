// DOM Elements for Auth
const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const authSwitches = document.querySelectorAll('.auth-switch');

// Close auth button
const closeAuth = document.createElement('button');
closeAuth.className = 'close-auth';
closeAuth.innerHTML = '×';
closeAuth.title = 'Close';
document.getElementById('auth-section').appendChild(closeAuth);

// Error messages mapping
const errorMessages = {
    'auth/email-already-in-use': 'This email address is already registered. Please try logging in or use a different email.',
    'auth/invalid-email': 'Please enter a valid email address.',
    'auth/operation-not-allowed': 'Email/password accounts are not enabled. Please contact support.',
    'auth/weak-password': 'Password must be at least 10 characters and include uppercase, lowercase, number, and special character.',
    'auth/user-disabled': 'This account has been disabled. Please contact support.',
    'auth/user-not-found': 'No account found with this username. Please check your username or sign up.',
    'auth/wrong-password': 'Incorrect password. Please try again.',
    'auth/too-many-requests': 'Too many unsuccessful attempts. Please try again later.',
    'auth/network-request-failed': 'Network error. Please check your internet connection.',
    'auth/invalid-login-credentials': 'Invalid username or password. Please try again.',
    'auth/unauthorized-continue-uri': 'Account created successfully! Please check your email for verification.',
    'firestore/permission-denied': 'Database error. Please contact support.',
    'default': 'An unexpected error occurred. Please try again.'
};

// Password validation rules
const passwordRules = {
    length: { regex: /.{10,}/, message: 'At least 10 characters' },
    uppercase: { regex: /[A-Z]/, message: 'One uppercase letter' },
    lowercase: { regex: /[a-z]/, message: 'One lowercase letter' },
    number: { regex: /[0-9]/, message: 'One number' },
    special: { regex: /[@$!%*?&]/, message: 'One special character (@$!%*?&)' }
};

// Verifică dacă username-ul este unic în Firestore
async function isUsernameUnique(username) {
    try {
        const doc = await window.db.collection('usernames').doc(username).get();
        return !doc.exists;
    } catch (error) {
        console.error('Error checking username:', error);
        throw error;
    }
}

// Salvează username-ul în Firestore
async function saveUsernameToFirestore(username, email) {
    try {
        await window.db.collection('usernames').doc(username).set({
            email: email,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log('Username saved to Firestore:', username);
    } catch (error) {
        console.error('Error saving username to Firestore:', error);
        throw error;
    }
}

// Obține email-ul asociat cu un username din Firestore
async function getEmailFromUsername(username) {
    try {
        const doc = await window.db.collection('usernames').doc(username).get();
        if (doc.exists) {
            return doc.data().email;
        }
        return null;
    } catch (error) {
        console.error('Error getting email from username:', error);
        throw error;
    }
}

// Show custom error message
function showError(message) {
    document.querySelectorAll('.error-message').forEach(msg => msg.remove());
    
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.innerHTML = `
        <div class="error-content">
            <div class="error-icon">
                <ion-icon name="warning-outline"></ion-icon>
            </div>
            <h3>Something went wrong</h3>
            <p>${message}</p>
            <button class="error-ok-btn">OK</button>
        </div>
    `;
    
    document.body.appendChild(errorMessage);
    
    setTimeout(() => {
        errorMessage.classList.add('show');
    }, 10);
    
    const okBtn = errorMessage.querySelector('.error-ok-btn');
    okBtn.addEventListener('click', () => {
        errorMessage.classList.remove('show');
        setTimeout(() => {
            errorMessage.remove();
        }, 300);
    });
}

// Show email verification notification
function showEmailVerificationNotification(user) {
    document.querySelectorAll('.verification-notification').forEach(notif => notif.remove());
    
    const notification = document.createElement('div');
    notification.className = 'verification-notification';
    
    notification.innerHTML = `
        <div class="verification-content">
            <div class="verification-icon">
                <ion-icon name="mail-outline"></ion-icon>
            </div>
            <h3>Verify Your Email</h3>
            <p>We've sent a verification link to <strong>${user.email}</strong>.</p>
            <p><strong>Please check your inbox AND spam folder</strong> for the verification email. You must verify your email before you can log in.</p>
            <div class="verification-actions">
                <button class="verification-resend-btn">Resend Email</button>
                <button class="verification-ok-btn">I'll Check My Email</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    const resendBtn = notification.querySelector('.verification-resend-btn');
    resendBtn.addEventListener('click', async () => {
        resendBtn.textContent = 'Sending...';
        resendBtn.disabled = true;
        
        try {
            await user.sendEmailVerification();
            resendBtn.textContent = 'Email Sent!';
            setTimeout(() => {
                resendBtn.textContent = 'Resend Email';
                resendBtn.disabled = false;
            }, 2000);
        } catch (error) {
            resendBtn.textContent = 'Failed - Try Again';
            resendBtn.disabled = false;
        }
    });
    
    const okBtn = notification.querySelector('.verification-ok-btn');
    okBtn.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
}

// Validate password strength
function validatePassword(password) {
    const requirements = {};
    
    Object.keys(passwordRules).forEach(key => {
        requirements[key] = {
            isValid: passwordRules[key].regex.test(password),
            message: passwordRules[key].message
        };
    });
    
    return {
        isValid: Object.values(requirements).every(req => req.isValid),
        requirements
    };
}

// Update password requirements display
function updatePasswordRequirements(password) {
    const passwordInput = document.getElementById('registerPassword');
    const requirementsContainer = document.querySelector('.password-requirements');
    const requirementElements = document.querySelectorAll('.password-requirements li');
    
    if (!requirementsContainer || !requirementElements.length) return;
    
    const validation = validatePassword(password);
    
    requirementElements.forEach(element => {
        const requirementType = element.getAttribute('data-requirement');
        const requirement = validation.requirements[requirementType];
        
        if (requirement) {
            if (requirement.isValid) {
                element.classList.add('valid');
            } else {
                element.classList.remove('valid');
            }
        }
    });
    
    if (password.length > 0) {
        if (validation.isValid) {
            passwordInput.classList.remove('error');
            passwordInput.classList.add('valid');
        } else {
            passwordInput.classList.add('error');
            passwordInput.classList.remove('valid');
        }
    } else {
        passwordInput.classList.remove('error', 'valid');
    }
}

// Toggle password visibility
function setupPasswordToggles() {
    document.querySelectorAll('.password-toggle').forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const passwordGroup = this.closest('.password-group');
            const input = passwordGroup.querySelector('input[type="password"], input[type="text"]');
            const icon = this.querySelector('ion-icon');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.setAttribute('name', 'eye-off-outline');
                this.setAttribute('aria-label', 'Hide password');
            } else {
                input.type = 'password';
                icon.setAttribute('name', 'eye-outline');
                this.setAttribute('aria-label', 'Show password');
            }
            
            input.focus();
        });
    });
}

// Real-time username validation
function setupUsernameValidation() {
    const usernameInput = document.getElementById('registerName');
    if (!usernameInput) return;
    
    let validationTimeout;
    
    usernameInput.addEventListener('input', function(e) {
        const username = this.value;
        
        clearTimeout(validationTimeout);
        
        if (username.length < 2) {
            this.style.borderBottomColor = '#1a1517';
            this.setCustomValidity('');
            return;
        }
        
        validationTimeout = setTimeout(async () => {
            try {
                const isUnique = await isUsernameUnique(username);
                if (!isUnique) {
                    this.style.borderBottomColor = '#e74c3c';
                    this.setCustomValidity('This username is already taken. Please choose a different one.');
                } else {
                    this.style.borderBottomColor = '#1a1517';
                    this.setCustomValidity('');
                }
            } catch (error) {
                console.error('Username validation error:', error);
                this.style.borderBottomColor = '#1a1517';
                this.setCustomValidity('');
            }
        }, 500);
    });
}

// Setup creative button effects
function setupCreativeButtons() {
    const loginBtn = loginForm?.querySelector('.modern-btn');
    const registerBtn = registerForm?.querySelector('.modern-btn');
    const accountBtn = document.querySelector('.account-btn');
    
    [loginBtn, registerBtn, accountBtn].forEach(button => {
        if (button) {
            button.classList.add('button-creative');
            setupButtonGlowEffect(button);
        }
    });
}

function setupButtonGlowEffect(button) {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        button.style.setProperty('--x', `${x}px`);
        button.style.setProperty('--y', `${y}px`);
    });
}

// Switch between login and register forms with animation
authSwitches.forEach(switchBtn => {
    switchBtn.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        const currentForm = document.querySelector('.auth-form.active');
        const targetForm = document.getElementById(target + 'Form');
        
        if (currentForm && targetForm && currentForm !== targetForm) {
            currentForm.classList.add('switching-out');
            
            setTimeout(() => {
                currentForm.classList.remove('active', 'switching-out');
                targetForm.classList.add('active', 'switching-in');
                
                setTimeout(() => {
                    targetForm.classList.remove('switching-in');
                }, 600);
            }, 400);
        }
    });
});

// Close auth section
closeAuth.addEventListener('click', () => {
    const authSection = document.getElementById('auth-section');
    if (authSection) {
        authSection.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        if (registerForm && typeof registerForm.reset === 'function') {
            registerForm.reset();
        }
        if (loginForm && typeof loginForm.reset === 'function') {
            loginForm.reset();
        }
        
        const passwordInput = document.getElementById('registerPassword');
        if (passwordInput) {
            passwordInput.classList.remove('error', 'valid');
            updatePasswordRequirements('');
        }
    }
});

// Close auth section when clicking outside
document.addEventListener('click', (e) => {
    const authSection = document.getElementById('auth-section');
    if (e.target === authSection && authSection.classList.contains('active')) {
        authSection.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        if (registerForm && typeof registerForm.reset === 'function') {
            registerForm.reset();
        }
        if (loginForm && typeof loginForm.reset === 'function') {
            loginForm.reset();
        }
        
        const passwordInput = document.getElementById('registerPassword');
        if (passwordInput) {
            passwordInput.classList.remove('error', 'valid');
            updatePasswordRequirements('');
        }
    }
});

// Register form submission
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;
    
    if (!name || !email || !password) {
        showError('Please fill in all fields.');
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('Please enter a valid email address.');
        return;
    }
    
    const passwordValidation = validatePassword(password);
    if (!passwordValidation.isValid) {
        showError('Please make sure your password meets all the requirements.');
        return;
    }
    
    const submitBtn = registerForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Creating Account...';
    submitBtn.disabled = true;
    
    try {
        // Verifică dacă username-ul este unic
        const usernameUnique = await isUsernameUnique(name);
        if (!usernameUnique) {
            showError('This username is already taken. Please choose a different one.');
            return;
        }
        
        // Creează contul în Firebase Auth
        const userCredential = await window.auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;
        
        // Actualizează profilul cu username-ul
        await user.updateProfile({
            displayName: name
        });
        
        // Salvează username-ul în Firestore
        await saveUsernameToFirestore(name, email);
        
        // Creează documentul de user stats pentru review-uri
        await window.db.collection('userStats').doc(user.uid).set({
            username: name,
            email: email,
            reviewsCount: 0,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            lastReviewAt: null
        });
        
        // Încearcă să trimiți email de verificare
        try {
            await user.sendEmailVerification();
            console.log('Verification email sent');
        } catch (verificationError) {
            console.log('Verification email might have issues, but account was created');
        }
        
        // Deloghează utilizatorul imediat
        await window.auth.signOut();
        
        const authSection = document.getElementById('auth-section');
        authSection.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        if (registerForm && typeof registerForm.reset === 'function') {
            registerForm.reset();
        }
        updatePasswordRequirements('');
        
        setTimeout(() => {
            showEmailVerificationNotification(user);
        }, 500);
        
    } catch (error) {
        console.error('Registration error:', error);
        
        if (error.code === 'auth/email-already-in-use') {
            showError('This email address is already registered. Please try logging in or use a different email.');
        } else if (error.code === 'auth/unauthorized-continue-uri') {
            await window.auth.signOut();
            
            const authSection = document.getElementById('auth-section');
            authSection.classList.remove('active');
            document.body.style.overflow = 'auto';
            
            if (registerForm && typeof registerForm.reset === 'function') {
                registerForm.reset();
            }
            updatePasswordRequirements('');
            
            setTimeout(() => {
                const user = window.auth.currentUser;
                if (user) {
                    showEmailVerificationNotification(user);
                }
            }, 500);
        } else {
            const errorCode = error.code;
            const errorMessage = errorMessages[errorCode] || errorMessages['default'];
            showError(errorMessage);
        }
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

// Login form submission
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (!username || !password) {
        showError('Please enter your username and password.');
        return;
    }
    
    const submitBtn = loginForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Logging In...';
    submitBtn.disabled = true;
    
    try {
        // Găsește email-ul asociat cu username-ul din Firestore
        const email = await getEmailFromUsername(username);
        
        if (!email) {
            showError('No account found with this username. Please check your username or sign up.');
            return;
        }
        
        // Încearcă login-ul cu email-ul găsit
        const userCredential = await window.auth.signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        
        // Verifică dacă email-ul este confirmat
        if (!user.emailVerified) {
            showEmailVerificationNotification(user);
            
            if (loginForm && typeof loginForm.reset === 'function') {
                loginForm.reset();
            }
            return;
        }
        
        // LOGIN SUCCESS
        const authSection = document.getElementById('auth-section');
        if (authSection) {
            authSection.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        const welcomeNotification = document.createElement('div');
        welcomeNotification.className = 'welcome-notification';
        welcomeNotification.innerHTML = `
            <div class="welcome-content">
                <div class="welcome-icon">
                    <ion-icon name="flower-outline"></ion-icon>
                </div>
                <h3>Welcome, ${user.displayName || 'beautiful'}!</h3>
                <p>We're thrilled to see you at CORELLE.</p>
                <button class="welcome-ok-btn">Continue Exploring</button>
            </div>
        `;
        
        document.body.appendChild(welcomeNotification);
        
        setTimeout(() => {
            welcomeNotification.classList.add('show');
        }, 10);
        
        const okBtn = welcomeNotification.querySelector('.welcome-ok-btn');
        okBtn.addEventListener('click', () => {
            welcomeNotification.classList.remove('show');
            setTimeout(() => {
                welcomeNotification.remove();
            }, 300);
        });
        
        if (loginForm && typeof loginForm.reset === 'function') {
            loginForm.reset();
        }
        
    } catch (error) {
        console.error('Login error:', error);
        
        if (error.code === 'auth/invalid-login-credentials' || error.code === 'auth/wrong-password') {
            showError('Invalid username or password. Please try again.');
        } else if (error.code === 'auth/user-not-found') {
            showError('No account found with this username. Please check your username or sign up.');
        } else {
            const errorCode = error.code;
            const errorMessage = errorMessages[errorCode] || errorMessages['default'];
            showError(errorMessage);
        }
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

// Real-time password validation
document.addEventListener('input', function(e) {
    if (e.target.id === 'registerPassword') {
        updatePasswordRequirements(e.target.value);
    }
});

// Mobile optimization for form inputs
function optimizeMobileInputs() {
    if ('ontouchstart' in window) {
        document.querySelectorAll('.input').forEach(input => {
            input.addEventListener('focus', function() {
                setTimeout(() => {
                    this.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300);
            });
        });
    }
}

// Initialize password requirements HTML
function initializePasswordRequirements() {
    const passwordGroup = document.querySelector('.password-group');
    if (passwordGroup && !passwordGroup.querySelector('.password-requirements')) {
        const requirementsHTML = `
            <div class="password-requirements">
                <p>Password must contain:</p>
                <ul>
                    <li data-requirement="length">At least 10 characters</li>
                    <li data-requirement="uppercase">One uppercase letter</li>
                    <li data-requirement="lowercase">One lowercase letter</li>
                    <li data-requirement="number">One number</li>
                    <li data-requirement="special">One special character (@$!%*?&)</li>
                </ul>
            </div>
        `;
        passwordGroup.insertAdjacentHTML('beforeend', requirementsHTML);
    }
}

// Initialize login system
document.addEventListener('DOMContentLoaded', function() {
    initializePasswordRequirements();
    setupPasswordToggles();
    setupUsernameValidation();
    setupCreativeButtons();
    optimizeMobileInputs();
    
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
    
    console.log('CORELLE login system initialized');
});

// Auto-capitalize name field
document.getElementById('registerName')?.addEventListener('input', function(e) {
    if (this.value.length === 1) {
        this.value = this.value.toUpperCase();
    }
});

// Enhanced email validation on blur
document.getElementById('registerEmail')?.addEventListener('blur', function(e) {
    const email = this.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email && !emailRegex.test(email)) {
        this.style.borderBottomColor = '#e74c3c';
    } else {
        this.style.borderBottomColor = '#1a1517';
    }
});