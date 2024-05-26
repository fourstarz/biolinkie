document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    const signUpButton = document.getElementById('sign-up-button');
    const signUpForm = document.getElementById('sign-up-form');
    const form = document.getElementById('form');
    const generatedLink = document.getElementById('generated-link');

    // Simulate loading time
    setTimeout(function() {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
    }, 2000); // Adjust the time as needed

    // Event listeners
    signUpButton.addEventListener('click', function() {
        signUpForm.style.display = 'block';
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const link = `${username}.github.io`;
        generatedLink.innerText = link;
    });
});
