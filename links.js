const linksData = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/404' },
    { name: 'Twitter', url: 'https://twitter.com/404' },
    // Add more links as needed
];

// Function to dynamically generate links
function generateLinks() {
    const linksContainer = document.getElementById('links');
    linksData.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.textContent = link.name;
        linksContainer.appendChild(linkElement);
    });
}

// Add @rights4a
const rightsText = document.createElement('p');
rightsText.textContent = '@rights4a';
document.getElementById('app').appendChild(rightsText);
