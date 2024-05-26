// particles
document.addEventListener('DOMContentLoaded', function () {
    const NUM_PARTICLES = 50;
    const particles = document.querySelector('.particles');

    for (let i = 0; i < NUM_PARTICLES; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.width = `${Math.random() * 10}px`;
        particle.style.height = `${Math.random() * 10}px`;
        particle.style.left = `${Math.random() * window.innerWidth}px`;
        particle.style.top = `${Math.random() * window.innerHeight}px`;
        particles.appendChild(particle);
    }

    // darkmode sliders 
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        document.getElementById('dark-mode-slider').checked = true;
    }
});

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// 
function enterSite() {
    const content = document.querySelector('.content');
    const enterMessage = document.querySelector('#enter-message');
    content.style.display = 'flex';
    enterMessage.style.display = 'none';
}

// click to enter
document.getElementById('enter-message').addEventListener('click', enterSite);

// dark mode slider
document.getElementById('dark-mode-slider').addEventListener('change', toggleDarkMode);
