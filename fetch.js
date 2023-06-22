async function fetchMoviesJSON() {

const response = await fetch('./code-test.json');

const movies = await response.json();
return movies;
}
fetchMoviesJSON().then(movies => {
const articleContainer = document.getElementById ('article-container');
movies.articles.forEach(article => {
articleContainer.innerHTML += renderArticle(article) ;
})
})

function renderArticle(article) {
return`
<div class="article-card">
<div class="inner-article">
<p class="article">${article.primarySectionRouteName}</p>
<h3>${article.headline}</h3>
<p>${article.standfirst}</p>
</div>
<div>

<a href-"${article.link}" target="_ blank"><img src="${article.thumbnail.src}"
alt="${article.thumbnail.title}" width="${article.thumbnail.width}"
height="${article.thumbnail.height}">
</a>
</div>
</div>

<hr>`;
}