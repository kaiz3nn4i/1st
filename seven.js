document.addEventListener('DOMContentLoaded', function() {
    const revealBtn = document.getElementById('revealBtn');
    const letterPopup = document.getElementById('letterPopup');
    const closeBtn = document.getElementById('closeBtn');
    const heartsContainer = document.getElementById('hearts');

    // Show letter popup
    revealBtn.addEventListener('click', function() {
        letterPopup.classList.add('active');
        createHearts();
    });

    // Close letter popup
    closeBtn.addEventListener('click', function() {
        letterPopup.classList.remove('active');
    });

    // Close when clicking outside the letter
    letterPopup.addEventListener('click', function(e) {
        if (e.target === letterPopup) {
            letterPopup.classList.remove('active');
        }
    });

    // Create floating hearts
    function createHearts() {
        // Clear existing hearts
        heartsContainer.innerHTML = '';
        
        // Create new hearts
        for (let i = 0; i < 10; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '🩷';
            heart.style.left = Math.random() * 90 + 'vw';
            heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
            heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heartsContainer.appendChild(heart);
        }
    }

    // Initial hearts
    createHearts();

});
