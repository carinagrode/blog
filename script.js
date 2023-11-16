document.addEventListener('DOMContentLoaded', function() {
    loadArticle('articles/01_hello-blog.index.html');

    const navLink = document.querySelectorAll('nav ul li a');
    navLink.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const articleURL = link.getAttribute('href');
            loadArticle(articleURL);
        });
    });
});

function loadArticle(articleURL) {
    fetch(articleURL)
    .then(response => response.text())
    .then(articleContent => {
        document.getElementById('content').innerHTML = articleContent;
    });
}