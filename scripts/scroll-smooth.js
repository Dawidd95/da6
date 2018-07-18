let linkToEvents = document.querySelector("a[href='#container__events']");

linkToEvents.addEventListener("click", function() {
	document.querySelector(".container__events").scrollIntoView({
		behavior: 'smooth'
	})
})