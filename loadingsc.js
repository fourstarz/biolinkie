document.addEventListener("DOMContentLoaded", function() {
    const app = document.getElementById('app');

    // Loading Screen
    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'loading-screen';
    loadingScreen.innerHTML = '<h1>Loading...</h1>';
    app.appendChild(loadingScreen);

    // Main Content
    const mainContent = document.createElement('div');
    mainContent.id = 'main-content';
    mainContent.innerHTML = `
        <h1>Welcome to Biolinkie</h1>
        <button id="sign-up-button">Sign Up</button>
        <button id="sign-in-button">Sign In</button>
        <div id="sign-up-form" style="display: none;">
            <h2>Sign Up</h2>
            <form id="form">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
                <p id="generated-link">(yourgithubname).github.io/</p>
                <button type="submit">Generate Biolink</button>
            </form>
        </div>
    `;
    app.appendChild(mainContent);

    // Simulate loading time
    setTimeout(function() {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
    }, 2000); // Adjust the time as needed

    // Event listeners
    document.getElementById('sign-up-button').addEventListener('click', function() {
        document.getElementById('sign-up-form').style.display = 'block';
    });

    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const link = `${username}.github.io`;
        document.getElementById('generated-link').innerText = link;
    });
});

