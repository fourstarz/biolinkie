document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    // Simulate loading time
    setTimeout(function() {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
    }, 2000); // Adjust the time as needed

    // Retrieve user's GitHub profile data
    fetch('https://api.github.com/users/yourgithubname')
        .then(response => response.json())
        .then(data => {
            const username = data.login;
            const profilePic = data.avatar_url;
            const bioLink = data.html_url;

            // Update profile section
            document.getElementById('username').innerText = username;
            document.getElementById('profile-pic').src = profilePic;

            // Add GitHub link
            const githubLink = document.createElement('a');
            githubLink.href = bioLink;
            githubLink.textContent = '@' + username;
            document.getElementById('links').appendChild(githubLink);
        });

    // Add additional links
    const linksData = [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/404' },
        { name: 'Twitter', url: 'https://twitter.com/404 },
        { name: 'github', url: 'https://www.github.com/rights4a
        // Add more links as needed
    ];

    const linksContainer = document.getElementById('links');
    linksData.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.textContent = link.name;
        linksContainer.appendChild(linkElement);
    });

    // Add @rights4a
    const rightsText = document.createElement('p');
    rightsText.textContent = '@rights4a';
    document.getElementById('app').appendChild(rightsText);
});
