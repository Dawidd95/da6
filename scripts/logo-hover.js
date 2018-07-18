function init() {
	let logo = document.querySelector("img[src='images/fb-logo.png']");

	logo.addEventListener("mouseover", function() {
		logo.src = 'images/fb-logo-hover.png';
	});

	logo.addEventListener("mouseout", function() {
		logo.src = 'images/fb-logo.png';
	});
}

document.addEventListener("DOMContentLoaded", init);