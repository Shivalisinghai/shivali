async function fetchDataJSON() {

const response = await fetch('/js/code-test.json');

const data = await response.json();
return data;
}
fetchDataJSON().then(data => {
const articleContainer = document.getElementById ('article-container');
data.articles.forEach(article => {
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
</div>`;
}