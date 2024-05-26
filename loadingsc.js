//  particles
document.addEventListener('DOMContentLoaded', function () {
    const NUM_PARTICLES = 50;
    const particles = document.querySelector('.particles');

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.width = `${Math.random() * 10}px`;
        particle.style.height = `${Math.random() * 10}px`;
        particle.style.left = `${Math.random() * window.innerWidth}px`;
        particle.style.top = `${Math.random() * window.innerHeight}px`;
        particles.appendChild(particle);

        // Remove particle after animation 
        setTimeout(() => {
            particles.removeChild(particle);
        }, 10000); // Match the animation
    }

    function generateParticles() {
        for (let i = 0; i < NUM_PARTICLES; i++) {
            createParticle();
        }
    }

    // Generate more particles
    generateParticles();

    // gang its every second 
    setInterval(generateParticles, 1000);

    // rest its dark mode
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        document.getElementById('dark-mode-slider').checked = true;
    }
});

//  dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Toggle content visibility on entering site
function enterSite() {
    const content = document.querySelector('.content');
    const enterMessage = document.querySelector('#enter-message');
    content.style.display = 'flex';
    enterMessage.style.display = 'none';
}

// Event listener for click to enter
document.getElementById('enter-message').addEventListener('click', enterSite);

// Event listener for dark mode toggle
document.getElementById('dark-mode-slider').addEventListener('change', toggleDarkMode);
