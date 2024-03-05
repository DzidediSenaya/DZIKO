document.addEventListener('DOMContentLoaded', function () {
    const footerContainer = document.querySelector('#footer-container');
    const footerURL = '../components/footer/footer.html';

    fetch(footerURL)
        .then(response => response.text())
        .then(html => {
            footerContainer.innerHTML = html;
        });
});
