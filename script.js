// Constants
const ANIMATION_RESET_DELAY = 10;
const SPARKLE_DURATION = 1000;
const SNOWFLAKE_INTERVAL = 200;
const INITIAL_SNOWFLAKES = 30;
const SNOWFLAKE_BURST_COUNT = 10;
const SNOWFLAKE_BURST_DELAY = 50;

// Create snowflakes
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    
    // Random starting position
    snowflake.style.left = Math.random() * 100 + '%';
    
    // Random size
    const size = Math.random() * 0.5 + 0.5;
    snowflake.style.fontSize = size + 'em';
    
    // Random animation duration
    const duration = Math.random() * 3 + 5;
    snowflake.style.animationDuration = duration + 's';
    
    // Random horizontal drift
    const drift = (Math.random() - 0.5) * 100;
    snowflake.style.setProperty('--drift', drift + 'px');
    
    document.getElementById('snowContainer').appendChild(snowflake);
    
    // Remove snowflake after animation completes
    setTimeout(() => {
        snowflake.remove();
    }, duration * 1000);
}

// Create snowflakes continuously
setInterval(createSnowflake, SNOWFLAKE_INTERVAL);

// Add initial snowflakes
for (let i = 0; i < INITIAL_SNOWFLAKES; i++) {
    setTimeout(createSnowflake, i * 100);
}

// Add click interaction to decorations
document.querySelectorAll('.decoration').forEach(decoration => {
    decoration.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = '';
        }, ANIMATION_RESET_DELAY);
        
        // Create sparkle effect
        const sparkle = document.createElement('div');
        sparkle.textContent = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.left = this.offsetLeft + 'px';
        sparkle.style.top = this.offsetTop + 'px';
        sparkle.style.fontSize = '2em';
        sparkle.style.animation = 'sparkleEffect 1s ease-out';
        this.parentElement.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), SPARKLE_DURATION);
    });
});

// Add sparkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleEffect {
        0% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
        }
        100% {
            opacity: 0;
            transform: scale(2) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Add hover effect to card
const card = document.querySelector('.christmas-card');
card.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.02)';
    this.style.transition = 'transform 0.3s ease';
});

card.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});

// Add keyboard interaction
document.addEventListener('keydown', function(e) {
    if (e.key === 'Space' || e.key === ' ' || e.key === 'Enter') {
        // Create burst of snowflakes
        for (let i = 0; i < SNOWFLAKE_BURST_COUNT; i++) {
            setTimeout(createSnowflake, i * SNOWFLAKE_BURST_DELAY);
        }
    }
});

console.log('🎄 메리 크리스마스! Merry Christmas! 🎄');
