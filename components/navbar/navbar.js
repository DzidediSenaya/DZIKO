document.addEventListener('DOMContentLoaded', function () {
    const navbarContainer = document.querySelector('#navbar-container');
    const navbarURL = '../components/navbar/navbar.html';

    fetch(navbarURL)
        .then(response => response.text())
        .then(html => {
            navbarContainer.innerHTML = html;
        });
});
