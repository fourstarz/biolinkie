document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading time
    setTimeout(function() {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 2000); // Adjust the time as needed

    document.getElementById("sign-up-button").addEventListener("click", function() {
        document.getElementById("sign-up-form").style.display = "block";
    });

    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const link = `${username}.github.io`;
        document.getElementById("generated-link").innerText = link;
    });
});
