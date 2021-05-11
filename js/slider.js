document.addEventListener("DOMContentLoaded", function() { 

	const slideValue = 33.3333333333;
	let currentSlideValue = 0;

	let prevBtn = document.querySelector('.portfolio-section__prev-control');
	let nextBtn = document.querySelector('.portfolio-section__next-control');

	let firstSlide = document.querySelector('.carousel-item_first');
	let secondSlide = document.querySelector('.carousel-item_second');
	let thirdSlide = document.querySelector('.carousel-item_third');
	let fourthSlide = document.querySelector('.carousel-item_fourth');
	let fifthSlide = document.querySelector('.carousel-item_fifth');
	let sixthSlide = document.querySelector('.carousel-item_sixth');
	let carouselItems = document.querySelectorAll('.carousel-item');

	let slidesArr = [firstSlide, secondSlide, thirdSlide, fourthSlide, fifthSlide, sixthSlide];

	slidesArr.forEach(function(elem) {
		elem.style.left = 0 + '%';
	});

	function slideNext() {
		if( firstSlide.style.left === Math.round(slidesArr.length/2 * -slideValue) + '%') {
			
			currentSlideValue = 0;
			slidesArr.forEach(function(elem) {
				elem.style.left = currentSlideValue + '%';
			});
			return;
		}

		currentSlideValue -= slideValue;

		slidesArr.forEach(function(elem) {
			elem.style.left = currentSlideValue + '%';
		});
	}

	function sliderPrev() {
		if( firstSlide.style.left === 0 + '%') {
			
			currentSlideValue = -100;
			slidesArr.forEach(function(elem) {
				elem.style.left = currentSlideValue + '%';
			});
			return;
		}

		currentSlideValue += slideValue;

		slidesArr.forEach(function(elem) {
			elem.style.left = Math.round(currentSlideValue) + '%';
		});
	}

	nextBtn.onclick = slideNext;
	prevBtn.onclick = sliderPrev;

	let slideInterval = setInterval(slideNext, 2000);

	carouselItems.forEach(function(elem) {
		elem.onmouseover = function() {
			clearInterval(slideInterval);
		}
		elem.onmouseout = function() {
			slideInterval = setInterval(slideNext, 2000);
		}
	});

});