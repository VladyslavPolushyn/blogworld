const postId = getId();

getArticle();

function getId() {
	let urlSearch = window.location.search.split('=');
	return urlSearch[urlSearch.length -1];
}

async function getArticle() {
	const url = `http://localhost:3000/api/list/${postId}`;
	let response = await fetch(url);
	let data = await response.json();
	renderPost(data);
}

function renderPost(data) {
	document.querySelector('.post-heading .container').insertAdjacentHTML('afterbegin', `<h1 class="post-heading__title">${data.title}</h1>`);

	document.querySelector('#blog-post__author-name-wrapp').insertAdjacentHTML('afterbegin', `<h4 class="blog-post__author-name">${data.author}</h4>`);

	document.querySelector('.post-data').insertAdjacentHTML('afterbegin', `<time datetime="${data.date}">${data.date}</time>`);

	if(data.type !== 'text') {
		document.querySelector('.post__img').insertAdjacentHTML('afterbegin', `<img src="${data.image}" alt="post img">`);
	}
	
	if(data.type === 'audio'){
		document.querySelector('.post__player-block').insertAdjacentHTML('afterbegin', `<audio controls src="#" class="post__player">`);
	}

	document.querySelector('.post__text-block').insertAdjacentHTML('afterbegin', `<p class="post__text">${data.description}</p>`);

	document.querySelector('.post__text-block__quote').insertAdjacentHTML('afterbegin', `<blockquote class="post__quote">
      <p class="post__text post__text_quote">${data.quote}</p>
    </blockquote>`);



}