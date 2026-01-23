// Firebase configuration - SINGLE SOURCE OF TRUTH
const firebaseConfig = {
    apiKey: "AIzaSyBrRaLUHCputgyaFuMz9UgkCIzsN3MMg5Q",
    authDomain: "corelle-a9259.firebaseapp.com",
    projectId: "corelle-a9259",
    storageBucket: "corelle-a9259.firebasestorage.app",
    messagingSenderId: "1057047681792",
    appId: "1:1057047681792:web:fcd2f15243c938d7f1b1e5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Global Firebase instances
const auth = firebase.auth();
const db = firebase.firestore();

// Global variables
let currentUser = null;
let favorites = [];
let userStats = {
    reviewsCount: 0
};

// Initialize user data in Firestore
async function initializeUserData(user) {
    try {
        console.log('Initializing user data for:', user.uid);
        const userDoc = await db.collection('users').doc(user.uid).get();
        
        if (!userDoc.exists) {
            // Create user document with initial data
            await db.collection('users').doc(user.uid).set({
                email: user.email,
                displayName: user.displayName,
                favorites: [],
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                lastLogin: firebase.firestore.FieldValue.serverTimestamp()
            });
            console.log('New user document created');
        } else {
            // Update last login for existing user
            await db.collection('users').doc(user.uid).update({
                lastLogin: firebase.firestore.FieldValue.serverTimestamp()
            });
            console.log('User document updated with last login');
        }
        
        // Initialize user stats
        await initializeUserStats(user);
        
    } catch (error) {
        console.error('Error initializing user data:', error);
    }
}

// Initialize user stats for reviews
async function initializeUserStats(user) {
    try {
        const statsDoc = await db.collection('userStats').doc(user.uid).get();
        
        if (!statsDoc.exists) {
            await db.collection('userStats').doc(user.uid).set({
                username: user.displayName,
                email: user.email,
                reviewsCount: 0,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                lastReviewAt: null
            });
            console.log('User stats document created');
        } else {
            userStats = statsDoc.data();
            console.log('User stats loaded:', userStats);
        }
    } catch (error) {
        console.error('Error initializing user stats:', error);
    }
}

// Auth state observer
auth.onAuthStateChanged(async (user) => {
    currentUser = user;
    const accountDropdown = document.querySelector('.account-dropdown');
    const accountText = document.querySelector('.account-text');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    if (user) {
        // User is signed in
        console.log('User signed in:', user.uid);
        const displayName = user.displayName || 'My Account';
        accountText.textContent = displayName;
        accountDropdown.classList.add('logged-in');
        
        // Update user info in panels
        document.getElementById('userDisplayName').textContent = displayName;
        document.getElementById('userEmail').textContent = user.email;
        
        // Initialize user data in Firestore
        await initializeUserData(user);
        
        // Load user favorites
        await loadUserFavorites();
        
        // Load user stats for reviews count
        await loadUserStats();
        
        // Ensure dropdown is properly initialized
        setTimeout(() => {
            if (dropdownMenu) {
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.visibility = 'hidden';
            }
        }, 100);
        
    } else {
        // User is signed out
        console.log('User signed out');
        accountText.textContent = 'Sign Up';
        accountDropdown.classList.remove('logged-in');
        favorites = [];
        userStats = { reviewsCount: 0 };
        
        // Update favorites UI
        updateFavoritesUI();
        
        // Ensure dropdown is hidden
        if (dropdownMenu) {
            dropdownMenu.style.opacity = '0';
            dropdownMenu.style.visibility = 'hidden';
        }
    }
});

// Load user stats
async function loadUserStats() {
    if (!currentUser) return;
    
    try {
        const statsDoc = await db.collection('userStats').doc(currentUser.uid).get();
        if (statsDoc.exists) {
            userStats = statsDoc.data();
            console.log('User stats loaded:', userStats);
            
            // Update reviews count in account panel
            const reviewsCountElement = document.querySelector('.stat-card:nth-child(3) .stat-number');
            if (reviewsCountElement) {
                reviewsCountElement.textContent = userStats.reviewsCount || 0;
            }
        }
    } catch (error) {
        console.error('Error loading user stats:', error);
    }
}

// Update user stats when adding a review
async function updateUserStats() {
    if (!currentUser) return;
    
    try {
        userStats.reviewsCount = (userStats.reviewsCount || 0) + 1;
        userStats.lastReviewAt = firebase.firestore.FieldValue.serverTimestamp();
        
        await db.collection('userStats').doc(currentUser.uid).set(userStats, { merge: true });
        
        // Update UI
        const reviewsCountElement = document.querySelector('.stat-card:nth-child(3) .stat-number');
        if (reviewsCountElement) {
            reviewsCountElement.textContent = userStats.reviewsCount;
        }
        
        console.log('User stats updated:', userStats);
    } catch (error) {
        console.error('Error updating user stats:', error);
    }
}

// Review System Functions
async function submitProductReview(productId, rating, comment) {
    if (!currentUser) {
        showNotification('Please log in to submit a review');
        return false;
    }
    
    try {
        const reviewData = {
            productId: productId,
            userId: currentUser.uid,
            username: currentUser.displayName,
            rating: rating,
            comment: comment,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            helpful: 0,
            reported: false
        };
        
        // Save review to Firestore
        await db.collection('reviews').add(reviewData);
        
        // Update product rating statistics
        await updateProductRatingStats(productId, rating);
        
        // Update user stats
        await updateUserStats();
        
        console.log('Review submitted successfully');
        return true;
    } catch (error) {
        console.error('Error submitting review:', error);
        showNotification('Failed to submit review. Please try again.');
        return false;
    }
}

async function updateProductRatingStats(productId, newRating) {
    try {
        const productStatsRef = db.collection('productStats').doc(productId.toString());
        const productStatsDoc = await productStatsRef.get();
        
        if (productStatsDoc.exists) {
            const stats = productStatsDoc.data();
            const totalRating = stats.averageRating * stats.reviewsCount;
            const newTotalRating = totalRating + newRating;
            const newReviewsCount = stats.reviewsCount + 1;
            const newAverageRating = newTotalRating / newReviewsCount;
            
            await productStatsRef.update({
                reviewsCount: newReviewsCount,
                averageRating: newAverageRating,
                lastReviewAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        } else {
            await productStatsRef.set({
                productId: productId,
                reviewsCount: 1,
                averageRating: newRating,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                lastReviewAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        }
        
        console.log('Product rating stats updated');
    } catch (error) {
        console.error('Error updating product rating stats:', error);
    }
}

async function getProductRating(productId) {
    try {
        const productStatsDoc = await db.collection('productStats').doc(productId.toString()).get();
        
        if (productStatsDoc.exists) {
            const stats = productStatsDoc.data();
            return {
                averageRating: stats.averageRating,
                reviewsCount: stats.reviewsCount
            };
        } else {
            return {
                averageRating: 0,
                reviewsCount: 0
            };
        }
    } catch (error) {
        console.error('Error getting product rating:', error);
        return {
            averageRating: 0,
            reviewsCount: 0
        };
    }
}

async function getUserReviewForProduct(productId) {
    if (!currentUser) return null;
    
    try {
        const reviewQuery = await db.collection('reviews')
            .where('productId', '==', productId)
            .where('userId', '==', currentUser.uid)
            .limit(1)
            .get();
        
        if (!reviewQuery.empty) {
            const reviewDoc = reviewQuery.docs[0];
            return {
                id: reviewDoc.id,
                ...reviewDoc.data()
            };
        }
        return null;
    } catch (error) {
        console.error('Error getting user review:', error);
        return null;
    }
}

async function getProductReviews(productId, limit = 10) {
    try {
        const reviewsQuery = await db.collection('reviews')
            .where('productId', '==', productId)
            .orderBy('createdAt', 'desc')
            .limit(limit)
            .get();
        
        return reviewsQuery.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error('Error getting product reviews:', error);
        return [];
    }
}

// Favorites System
async function loadUserFavorites() {
    if (!currentUser) {
        console.log('No user logged in, skipping favorites load');
        favorites = [];
        updateFavoritesUI();
        return;
    }
    
    try {
        console.log('Loading favorites for user:', currentUser.uid);
        const userDoc = await db.collection('users').doc(currentUser.uid).get();
        
        if (userDoc.exists) {
            const userData = userDoc.data();
            favorites = userData.favorites || [];
            console.log('Favorites loaded successfully:', favorites.length, 'items');
            
            // Debug: log favorite products
            favorites.forEach(fav => {
                console.log('Favorite:', fav.name, fav.id);
            });
        } else {
            console.log('User document does not exist, creating...');
            favorites = [];
            // Create user document if it doesn't exist
            await initializeUserData(currentUser);
        }
        updateFavoritesUI();
    } catch (error) {
        console.error('Error loading favorites:', error);
        console.error('Error details:', error.code, error.message);
        favorites = [];
        updateFavoritesUI();
    }
}

async function saveUserFavorites() {
    if (!currentUser) {
        console.log('No user logged in, cannot save favorites');
        return;
    }
    
    try {
        console.log('Saving favorites for user:', currentUser.uid);
        console.log('Favorites to save:', favorites);
        
        await db.collection('users').doc(currentUser.uid).set({
            favorites: favorites,
            lastUpdated: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        
        console.log('Favorites saved successfully to Firestore');
    } catch (error) {
        console.error('Error saving favorites:', error);
        console.error('Error details:', error.code, error.message);
        showNotification('Failed to save favorites. Please try again.');
    }
}

function toggleFavorite(product) {
    if (!currentUser) {
        showNotification('Please log in to add favorites');
        return;
    }
    
    const existingIndex = favorites.findIndex(fav => fav.id === product.id);
    
    if (existingIndex > -1) {
        // Remove from favorites
        favorites.splice(existingIndex, 1);
        showNotification('Removed from favorites');
        console.log('Removed from favorites:', product.name);
    } else {
        // Add to favorites
        favorites.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            addedAt: new Date().toISOString()
        });
        showNotification('Added to favorites');
        console.log('Added to favorites:', product.name);
    }
    
    saveUserFavorites();
    updateFavoritesUI();
}

function isProductFavorite(productId) {
    return favorites.some(fav => fav.id === productId);
}

function updateFavoritesUI() {
    console.log('Updating favorites UI, current favorites:', favorites.length);
    
    // Update favorite buttons on product cards
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        const productId = parseInt(btn.getAttribute('data-product-id'));
        const isFav = isProductFavorite(productId);
        
        if (isFav) {
            btn.classList.add('active');
            btn.querySelector('ion-icon').setAttribute('name', 'heart');
        } else {
            btn.classList.remove('active');
            btn.querySelector('ion-icon').setAttribute('name', 'heart-outline');
        }
    });
    
    // Update favorites count in account panel
    const favoritesCount = document.querySelector('.stat-card:nth-child(2) .stat-number');
    if (favoritesCount) {
        favoritesCount.textContent = favorites.length;
        console.log('Updated favorites count:', favorites.length);
    }
    
    // Update favorites list in account panel
    updateFavoritesList();
}

function updateFavoritesList() {
    const favoritesList = document.querySelector('.favorites-list');
    if (!favoritesList) {
        console.log('Favorites list element not found');
        return;
    }
    
    console.log('Updating favorites list with:', favorites.length, 'items');
    favoritesList.innerHTML = '';
    
    if (favorites.length === 0) {
        favoritesList.innerHTML = `
            <div class="favorites-placeholder">
                <ion-icon name="heart-outline"></ion-icon>
                <p>No favorite products yet</p>
                <p style="font-size: 0.8rem; margin-top: 0.5rem; color: #666;">
                    Click the heart icon on products to add them to favorites
                </p>
            </div>
        `;
        return;
    }
    
    // Sort favorites by most recently added
    const sortedFavorites = [...favorites].sort((a, b) => 
        new Date(b.addedAt || 0) - new Date(a.addedAt || 0)
    );
    
    sortedFavorites.forEach(fav => {
        const favoriteItem = document.createElement('div');
        favoriteItem.className = 'favorite-item';
        favoriteItem.innerHTML = `
            <img src="${fav.image}" alt="${fav.name}" class="favorite-item-image">
            <div class="favorite-item-details">
                <h4 class="favorite-item-name">${fav.name}</h4>
                <p class="favorite-item-price">${fav.price} RON</p>
            </div>
            <button class="remove-favorite" data-product-id="${fav.id}">
                <ion-icon name="trash-outline"></ion-icon>
            </button>
        `;
        
        favoriteItem.addEventListener('click', function(e) {
            if (!e.target.closest('.remove-favorite')) {
                // Find and open the product modal
                const product = window.products?.find(p => p.id === fav.id);
                if (product && window.openProductModal) {
                    window.openProductModal(product);
                }
            }
        });
        
        const removeBtn = favoriteItem.querySelector('.remove-favorite');
        removeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('Removing favorite from list:', fav.name);
            toggleFavorite(fav);
        });
        
        favoritesList.appendChild(favoriteItem);
    });
}

// Utility functions
function showError(message) {
    console.error('Error:', message);
}

function showNotification(message) {
    console.log('Notification:', message);
    
    // Remove existing notifications
    document.querySelectorAll('.custom-notification').forEach(notif => notif.remove());
    
    const notification = document.createElement('div');
    notification.className = 'custom-notification';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        font-family: 'primary', sans-serif;
        font-size: 0.9rem;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Test Firestore connection
async function testFirestoreConnection() {
    try {
        console.log('Testing Firestore connection...');
        const testDoc = await db.collection('users').limit(1).get();
        console.log('✅ Firestore connection: OK');
        return true;
    } catch (error) {
        console.error('❌ Firestore connection failed:', error);
        return false;
    }
}
// Funcție pentru a sincroniza currentUser global
function syncCurrentUser() {
    window.currentUser = window.auth?.currentUser;
    console.log('User sync completed:', window.currentUser);
}

// Apelă sincronizarea periodic și la schimbarea stării de auth
setInterval(syncCurrentUser, 2000);

// Auth state observer - ACTUALIZAT
auth.onAuthStateChanged(async (user) => {
    window.currentUser = user; // Sincronizează imediat
    const accountDropdown = document.querySelector('.account-dropdown');
    const accountText = document.querySelector('.account-text');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    if (user) {
        // User is signed in
        console.log('User signed in:', user.uid);
        const displayName = user.displayName || 'My Account';
        accountText.textContent = displayName;
        accountDropdown.classList.add('logged-in');
        
        // Update user info in panels
        document.getElementById('userDisplayName').textContent = displayName;
        document.getElementById('userEmail').textContent = user.email;
        
        // Initialize user data in Firestore
        await initializeUserData(user);
        
        // Load user favorites
        await loadUserFavorites();
        
        // Load user stats for reviews count
        await loadUserStats();
        
        // Ensure dropdown is properly initialized
        setTimeout(() => {
            if (dropdownMenu) {
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.visibility = 'hidden';
            }
        }, 100);
        
    } else {
        // User is signed out
        console.log('User signed out');
        window.currentUser = null; // Asigură-te că e null
        accountText.textContent = 'Sign Up';
        accountDropdown.classList.remove('logged-in');
        favorites = [];
        userStats = { reviewsCount: 0 };
        
        // Update favorites UI
        updateFavoritesUI();
        
        // Ensure dropdown is hidden
        if (dropdownMenu) {
            dropdownMenu.style.opacity = '0';
            dropdownMenu.style.visibility = 'hidden';
        }
    }
    
    // Sincronizează din nou după schimbarea stării
    syncCurrentUser();
});
// Make functions globally available
window.auth = auth;
window.db = db;
window.currentUser = currentUser;
window.favorites = favorites;
window.userStats = userStats;
window.toggleFavorite = toggleFavorite;
window.isProductFavorite = isProductFavorite;
window.loadUserFavorites = loadUserFavorites;
window.submitProductReview = submitProductReview;
window.getProductRating = getProductRating;
window.getUserReviewForProduct = getUserReviewForProduct;
window.getProductReviews = getProductReviews;

// Initialize connection test
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 CORELLE app initializing...');
    testFirestoreConnection();
});