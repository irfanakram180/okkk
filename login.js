// JavaScript code for login functionality
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            // Here you would typically send a request to your server to validate the credentials
            // For demonstration, let's assume the username is "admin" and password is "password"
            if (username === "fani" && password === "fani5576") {
                // Redirect to the admin page if login is successful
                window.location.href = "/New folder/ok.html"; // Change "admin.html" to the path of your admin page
            } else {
                alert("Invalid username or password. its means you are not admin.");
            }
        });
    }
});
