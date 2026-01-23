// DOM Elements
const accountBtn = document.getElementById('accountBtn');
const accountText = document.querySelector('.account-text');
const authSection = document.getElementById('auth-section');
const logoutBtn = document.getElementById('logoutBtn');
const dropdownItems = document.querySelectorAll('.dropdown-item');
const userPanels = document.querySelectorAll('.user-panel');
const panelBacks = document.querySelectorAll('.panel-back');

// Progress Scroll
const progressScroll = document.querySelector('.progress-scroll');

// Update progress scroll
function updateProgressScroll() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const progress = (scrollTop / documentHeight) * 100;
    progressScroll.style.width = progress + '%';
}

// Initialize dropdown state
function initializeDropdown() {
    const accountDropdown = document.querySelector('.account-dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    if (dropdownMenu) {
        dropdownMenu.style.opacity = '0';
        dropdownMenu.style.visibility = 'hidden';
    }
}

// Show specific panel
function showPanel(panelName) {
    userPanels.forEach(panel => panel.classList.remove('active'));
    const targetPanel = document.getElementById(panelName + 'Panel');
    if (targetPanel) {
        targetPanel.classList.add('active');
        
        // Load favorites when account panel is opened
        if (panelName === 'account' && window.loadUserFavorites) {
            window.loadUserFavorites();
        }
    }
}

// Toggle auth section
accountBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const accountDropdown = document.querySelector('.account-dropdown');
    
    if (!accountDropdown.classList.contains('logged-in')) {
        authSection.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
});

// Dropdown functionality
dropdownItems.forEach(item => {
    if (item.id !== 'logoutBtn') {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const panel = item.getAttribute('data-panel');
            showPanel(panel);
        });
    }
});

// Back buttons
panelBacks.forEach(backBtn => {
    backBtn.addEventListener('click', () => {
        userPanels.forEach(panel => panel.classList.remove('active'));
    });
});

// Logout functionality
logoutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const dropdownMenu = document.querySelector('.dropdown-menu');
    if (dropdownMenu) {
        dropdownMenu.style.opacity = '0';
        dropdownMenu.style.visibility = 'hidden';
    }
    
    const logoutMessage = document.createElement('div');
    logoutMessage.className = 'logout-message';
    logoutMessage.innerHTML = `
        <div class="logout-content">
            <div class="logout-heart">
                <svg viewBox="0 0 24 24" width="48" height="48">
                    <path fill="#ddc9d1" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
            </div>
            <h3>Until we meet again</h3>
            <p>You have been successfully logged out.<br>We can't wait to see you back at CORELLE.</p>
            <button class="logout-ok-btn">Continue Browsing</button>
        </div>
    `;
    
    document.body.appendChild(logoutMessage);
    
    setTimeout(() => {
        logoutMessage.classList.add('show');
    }, 10);
    
    // Use the global auth instance
    window.auth.signOut().then(() => {
        console.log('User signed out successfully');
    }).catch((error) => {
        console.error('Logout failed:', error);
        if (logoutMessage.parentNode) {
            logoutMessage.remove();
        }
    });
    
    const okBtn = logoutMessage.querySelector('.logout-ok-btn');
    okBtn.addEventListener('click', () => {
        logoutMessage.classList.remove('show');
        setTimeout(() => {
            if (logoutMessage.parentNode) {
                logoutMessage.remove();
            }
        }, 300);
    });
});

// Close panels when clicking outside
document.addEventListener('click', (e) => {
    const accountDropdown = document.querySelector('.account-dropdown');
    
    if (!e.target.closest('.account-dropdown') && !e.target.closest('.user-panel')) {
        if (accountDropdown.classList.contains('logged-in')) {
            const dropdownMenu = document.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.visibility = 'hidden';
            }
        }
    }
});

// Add escape key to close
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close auth section
        if (authSection.classList.contains('active')) {
            authSection.classList.remove('active');
            document.body.style.overflow = 'auto';
            return;
        }
        
        // Close user panels
        let panelClosed = false;
        userPanels.forEach(panel => {
            if (panel.classList.contains('active')) {
                panel.classList.remove('active');
                panelClosed = true;
            }
        });
        
        // If a panel was closed, don't close dropdown
        if (panelClosed) return;
        
        // Close dropdown only if no panels were closed
        const dropdownMenu = document.querySelector('.dropdown-menu');
        if (dropdownMenu) {
            dropdownMenu.style.opacity = '0';
            dropdownMenu.style.visibility = 'hidden';
        }
        
        // Close any open notifications
        const notifications = document.querySelectorAll('.welcome-notification, .error-message, .logout-message, .verification-notification');
        notifications.forEach(notification => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        });
    }
});

// Theme selector functionality
document.querySelectorAll('.theme-option').forEach(option => {
    option.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.theme-option').forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
    });
});

// Prevent dropdown from closing when clicking inside it
document.addEventListener('click', (e) => {
    if (e.target.closest('.dropdown-menu')) {
        e.stopPropagation();
    }
});

// Handle dropdown hover for logged-in users
let dropdownTimeout;
document.addEventListener('mouseover', function(e) {
    const accountDropdown = document.querySelector('.account-dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    if (accountDropdown.classList.contains('logged-in') && 
        e.target.closest('.account-dropdown')) {
        clearTimeout(dropdownTimeout);
        if (dropdownMenu) {
            dropdownMenu.style.opacity = '1';
            dropdownMenu.style.visibility = 'visible';
            dropdownMenu.style.transform = 'translateY(5px)';
        }
    }
});

// Handle dropdown mouse leave
document.addEventListener('mouseout', function(e) {
    const accountDropdown = document.querySelector('.account-dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    if (accountDropdown.classList.contains('logged-in') && 
        (!e.relatedTarget || !e.relatedTarget.closest('.account-dropdown'))) {
        dropdownTimeout = setTimeout(() => {
            if (dropdownMenu) {
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.visibility = 'hidden';
                dropdownMenu.style.transform = 'translateY(-10px)';
            }
        }, 300);
    }
});

// Video loading optimization
const bgVideo = document.getElementById('bg-video');
if (bgVideo) {
    bgVideo.addEventListener('loadeddata', function() {
        console.log('Background video loaded successfully');
    });
    
    bgVideo.addEventListener('error', function() {
        console.log('Background video failed to load, using fallback');
    });
}

// Scroll event listener for progress bar
window.addEventListener('scroll', updateProgressScroll);
window.addEventListener('resize', updateProgressScroll);

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeDropdown();
    updateProgressScroll();
    
    // Mobile touch optimization
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
    
    console.log('CORELLE home system initialized');
});

// Performance optimization: Debounce scroll events
let scrollTimeout;
window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(updateProgressScroll, 10);
});

// Responsive video handling
function handleVideoResponsive() {
    if (window.innerWidth < 768) {
        bgVideo?.setAttribute('playsinline', '');
        bgVideo?.setAttribute('muted', '');
        bgVideo?.setAttribute('autoplay', '');
    }
}

window.addEventListener('resize', handleVideoResponsive);
handleVideoResponsive();