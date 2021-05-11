const addBtn = document.querySelector('.main-header__add-btn');
const postForm = document.querySelector('.post-form');
const submitPost = document.querySelector('#submit_post');
const cancelPostForm = document.querySelector('#form_post_cancel');
// inputs
const inputImg = document.getElementById('image');
const inputPostType = document.getElementById('post_type');
const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const inputDate = document.getElementById('date');
const inputDescription = document.getElementById('description');
const inputQuote = document.getElementById('quote');

addBtn.onclick = function() {
	postForm.classList.toggle('no-display');
}
cancelPostForm.onclick = function(e) {
	e.preventDefault();
	postForm.classList.toggle('no-display');
}

submitPost.onclick = async function (e) {
	e.preventDefault();

	if(formValidation(inputTitle.value, inputAuthor.value, inputDate.value, inputDescription.value, inputQuote.value)) {

		let articles = await getArticles();
		console.log(articles);

		let data = {
			id: articles.length+1,
			image: inputImg.value,
			type: inputPostType.value,
			date: inputDate.value,
			title: inputTitle.value,
			author: inputAuthor.value,
			description: inputDescription.value,
			quote: inputQuote.value
		}

		let postUrl = 'http://localhost:3000/api/create-article';

		fetch(postUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		.then(() => {
			window.location.href = `post.html?id=${articles.length+1}`
		})
			.catch((error) => {
				console.log(error);
			})

	}else {
		alert('Fill the form correctly!');
	}

}

function formValidation(title, author, date, description, quote) {
	if(/([A-Z]{1})([a-zA-Z0-9\!\-\,\.\?\:\ ]{2,18})/.test(title)&&(author !== '')&&(date !== '')&&(description !== '')&&(quote !== '')) {
		return true;
	}
	return false;
}

async function getArticles() {
	const url = 'http://localhost:3000/api/list';
	let response = await fetch(url);
	let data = await response.json();
	return data;
}