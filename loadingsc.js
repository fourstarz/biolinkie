// particles
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

        
        setTimeout(() => {
            particles.removeChild(particle);
        }, 10000); // amiation duraction
    }

    function generateParticles() {
        for (let i = 0; i < NUM_PARTICLES; i++) {
            createParticle();
        }
    }

    // Generate mora because why not
    generateParticles();

    // xoxox
    setInterval(generateParticles, 1000);

    }

    // dark mode sections
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

//  visibility on entering site
function enterSite() {
    const content = document.querySelector('.content');
    const enterMessage = document.querySelector('#enter-message');
    content.style.display = 'flex';
    enterMessage.style.display = 'none';
}


document.getElementById('enter-message').addEventListener('click', enterSite);


document.getElementById('dark-mode-slider').addEventListener('change', toggleDarkMode);

// coded by rights4a
