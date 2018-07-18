function init() {
	let img1 = document.querySelector(".img1");
	let topDecoration1 = document.querySelector(".img1__decoration .decoration__top");
	let middleDecoration1 = document.querySelector(".img1__decoration .decoration__middle");
	let middleCenter1 = document.querySelector(".img1__decoration .decoration__middle .middle__center")
	let bottomDecoration1 = document.querySelector(".img1__decoration .decoration__bottom");
	let centerEvent1 = document.querySelector(".img1__decoration .middle__center .center__event");
	let centerYear1 = document.querySelector(".img1__decoration .middle__center .center__year");

	let img2 = document.querySelector(".img2");
	let topDecoration2 = document.querySelector(".img2__decoration .decoration__top");
	let middleDecoration2 = document.querySelector(".img2__decoration .decoration__middle");
	let middleCenter2 = document.querySelector(".img2__decoration .decoration__middle .middle__center")
	let bottomDecoration2 = document.querySelector(".img2__decoration .decoration__bottom");
	let centerEvent2 = document.querySelector(".img2__decoration .middle__center .center__event");
	let centerYear2 = document.querySelector(".img2__decoration .middle__center .center__year");

	let img3 = document.querySelector(".img3");
	let topDecoration3 = document.querySelector(".img3__decoration .decoration__top");
	let middleDecoration3 = document.querySelector(".img3__decoration .decoration__middle");
	let middleCenter3 = document.querySelector(".img3__decoration .decoration__middle .middle__center")
	let bottomDecoration3 = document.querySelector(".img3__decoration .decoration__bottom");
	let centerEvent3 = document.querySelector(".img3__decoration .middle__center .center__event");
	let centerYear3 = document.querySelector(".img3__decoration .middle__center .center__year");

	let img4 = document.querySelector(".img4");
	let topDecoration4 = document.querySelector(".img4__decoration .decoration__top");
	let middleDecoration4 = document.querySelector(".img4__decoration .decoration__middle");
	let middleCenter4 = document.querySelector(".img4__decoration .decoration__middle .middle__center")
	let bottomDecoration4 = document.querySelector(".img4__decoration .decoration__bottom");
	let centerEvent4 = document.querySelector(".img4__decoration .middle__center .center__event");
	let centerYear4 = document.querySelector(".img4__decoration .middle__center .center__year");

	let img5 = document.querySelector(".img5");
	let topDecoration5 = document.querySelector(".img5__decoration .decoration__top");
	let middleDecoration5 = document.querySelector(".img5__decoration .decoration__middle");
	let middleCenter5 = document.querySelector(".img5__decoration .decoration__middle .middle__center")
	let bottomDecoration5 = document.querySelector(".img5__decoration .decoration__bottom");
	let centerEvent5 = document.querySelector(".img5__decoration .middle__center .center__event");
	let centerYear5 = document.querySelector(".img5__decoration .middle__center .center__year");

	let img6 = document.querySelector(".img6");
	let topDecoration6 = document.querySelector(".img6__decoration .decoration__top");
	let middleDecoration6 = document.querySelector(".img6__decoration .decoration__middle");
	let middleCenter6 = document.querySelector(".img6__decoration .decoration__middle .middle__center")
	let bottomDecoration6 = document.querySelector(".img6__decoration .decoration__bottom");
	let centerEvent6 = document.querySelector(".img6__decoration .middle__center .center__event");
	let centerYear6 = document.querySelector(".img6__decoration .middle__center .center__year");

	let img7 = document.querySelector(".img7");
	let topDecoration7 = document.querySelector(".img7__decoration .decoration__top");
	let middleDecoration7 = document.querySelector(".img7__decoration .decoration__middle");
	let middleCenter7 = document.querySelector(".img7__decoration .decoration__middle .middle__center")
	let bottomDecoration7 = document.querySelector(".img7__decoration .decoration__bottom");
	let centerEvent7 = document.querySelector(".img7__decoration .middle__center .center__event");
	let centerYear7 = document.querySelector(".img7__decoration .middle__center .center__year");

	let img8 = document.querySelector(".img8");
	let topDecoration8 = document.querySelector(".img8__decoration .decoration__top");
	let middleDecoration8 = document.querySelector(".img8__decoration .decoration__middle");
	let middleCenter8 = document.querySelector(".img8__decoration .decoration__middle .middle__center")
	let bottomDecoration8 = document.querySelector(".img8__decoration .decoration__bottom");
	let centerEvent8 = document.querySelector(".img8__decoration .middle__center .center__event");
	let centerYear8 = document.querySelector(".img8__decoration .middle__center .center__year");


	img1.addEventListener("mouseover", function() {
		this.style.backgroundImage = "url('images/gallery1d.jpg')";
		this.style.transition = "0.5s";
		topDecoration1.style.borderColor = "white";
		topDecoration1.style.transition = "1s";
		middleDecoration1.style.borderColor = "white";
		middleDecoration1.style.transition = "2s";
		middleCenter1.style.borderColor = "white";
		middleCenter1.style.transition = "1s";
		bottomDecoration1.style.borderColor = "white";
		bottomDecoration1.style.transition = "1s";
		centerEvent1.style.color = "white";
		centerEvent1.style.transition = "1.5s";
		centerYear1.style.transition = "1.5s";
		centerYear1.style.color = "white";
	})

	img1.addEventListener("mouseout", function() {
		this.style.backgroundImage = "url('images/gallery1.jpg')";
		this.style.transition = "0.5s";
		topDecoration1.style.borderColor = "transparent";
		topDecoration1.style.transition = "1s";
		middleDecoration1.style.borderColor = "transparent";
		middleDecoration1.style.transition = "2s";
		middleCenter1.style.borderColor = "transparent";
		middleCenter1.style.transition = "1s";
		bottomDecoration1.style.borderColor = "transparent";
		bottomDecoration1.style.transition = "1s";
		centerEvent1.style.color = "transparent";
		centerEvent1.style.transition = "1.5s";
		centerYear1.style.transition = "1.5s";
		centerYear1.style.color = "transparent";
	})

	img2.addEventListener("mouseover", function() {
		this.style.backgroundImage = "url('images/gallery2d.jpg')";
		this.style.transition = "0.5s";
		topDecoration2.style.borderColor = "white";
		topDecoration2.style.transition = "1s";
		middleDecoration2.style.borderColor = "white";
		middleDecoration2.style.transition = "2s";
		middleCenter2.style.borderColor = "white";
		middleCenter2.style.transition = "1s";
		bottomDecoration2.style.borderColor = "white";
		bottomDecoration2.style.transition = "1s";
		centerEvent2.style.color = "white";
		centerEvent2.style.transition = "1.5s";
		centerYear2.style.transition = "1.5s";
		centerYear2.style.color = "white";
	})

	img2.addEventListener("mouseout", function() {
		this.style.backgroundImage = "url('images/gallery2.jpg')";
		this.style.transition = "0.5s";
		topDecoration2.style.borderColor = "transparent";
		topDecoration2.style.transition = "1s";
		middleDecoration2.style.borderColor = "transparent";
		middleDecoration2.style.transition = "2s";
		middleCenter2.style.borderColor = "transparent";
		middleCenter2.style.transition = "1s";
		bottomDecoration2.style.borderColor = "transparent";
		bottomDecoration2.style.transition = "1s";
		centerEvent2.style.color = "transparent";
		centerEvent2.style.transition = "1.5s";
		centerYear2.style.transition = "1.5s";
		centerYear2.style.color = "transparent";
	})
	
	img3.addEventListener("mouseover", function() {
		this.style.backgroundImage = "url('images/gallery3d.jpg')";
		this.style.transition = "0.5s";
		topDecoration3.style.borderColor = "white";
		topDecoration3.style.transition = "1s";
		middleDecoration3.style.borderColor = "white";
		middleDecoration3.style.transition = "2s";
		middleCenter3.style.borderColor = "white";
		middleCenter3.style.transition = "1s";
		bottomDecoration3.style.borderColor = "white";
		bottomDecoration3.style.transition = "1s";
		centerEvent3.style.color = "white";
		centerEvent3.style.transition = "1.5s";
		centerYear3.style.transition = "1.5s";
		centerYear3.style.color = "white";
	})

	img3.addEventListener("mouseout", function() {
		this.style.backgroundImage = "url('images/gallery3.JPG')";
		this.style.transition = "0.5s";
		topDecoration3.style.borderColor = "transparent";
		topDecoration3.style.transition = "1s";
		middleDecoration3.style.borderColor = "transparent";
		middleDecoration3.style.transition = "2s";
		middleCenter3.style.borderColor = "transparent";
		middleCenter3.style.transition = "1s";
		bottomDecoration3.style.borderColor = "transparent";
		bottomDecoration3.style.transition = "1s";
		centerEvent3.style.color = "transparent";
		centerEvent3.style.transition = "1.5s";
		centerYear3.style.transition = "1.5s";
		centerYear3.style.color = "transparent";
	})
	
	img4.addEventListener("mouseover", function() {
		this.style.backgroundImage = "url('images/gallery4d.jpg')";
		this.style.transition = "0.5s";
		topDecoration4.style.borderColor = "white";
		topDecoration4.style.transition = "1s";
		middleDecoration4.style.borderColor = "white";
		middleDecoration4.style.transition = "2s";
		middleCenter4.style.borderColor = "white";
		middleCenter4.style.transition = "1s";
		bottomDecoration4.style.borderColor = "white";
		bottomDecoration4.style.transition = "1s";
		centerEvent4.style.color = "white";
		centerEvent4.style.transition = "1.5s";
		centerYear4.style.transition = "1.5s";
		centerYear4.style.color = "white";
	})

	img4.addEventListener("mouseout", function() {
		this.style.backgroundImage = "url('images/gallery4.JPG')";
		this.style.transition = "0.5s";
		topDecoration4.style.borderColor = "transparent";
		topDecoration4.style.transition = "1s";
		middleDecoration4.style.borderColor = "transparent";
		middleDecoration4.style.transition = "2s";
		middleCenter4.style.borderColor = "transparent";
		middleCenter4.style.transition = "1s";
		bottomDecoration4.style.borderColor = "transparent";
		bottomDecoration4.style.transition = "1s";
		centerEvent4.style.color = "transparent";
		centerEvent4.style.transition = "1.5s";
		centerYear4.style.transition = "1.5s";
		centerYear4.style.color = "transparent";
	})
	
	img5.addEventListener("mouseover", function() {
		this.style.backgroundImage = "url('images/gallery5d.jpg')";
		this.style.transition = "0.5s";
		topDecoration5.style.borderColor = "white";
		topDecoration5.style.transition = "1s";
		middleDecoration5.style.borderColor = "white";
		middleDecoration5.style.transition = "2s";
		middleCenter5.style.borderColor = "white";
		middleCenter5.style.transition = "1s";
		bottomDecoration5.style.borderColor = "white";
		bottomDecoration5.style.transition = "1s";
		centerEvent5.style.color = "white";
		centerEvent5.style.transition = "1.5s";
		centerYear5.style.transition = "1.5s";
		centerYear5.style.color = "white";
	})

	img5.addEventListener("mouseout", function() {
		this.style.backgroundImage = "url('images/gallery5.jpg')";
		this.style.transition = "0.5s";
		topDecoration5.style.borderColor = "transparent";
		topDecoration5.style.transition = "1s";
		middleDecoration5.style.borderColor = "transparent";
		middleDecoration5.style.transition = "2s";
		middleCenter5.style.borderColor = "transparent";
		middleCenter5.style.transition = "1s";
		bottomDecoration5.style.borderColor = "transparent";
		bottomDecoration5.style.transition = "1s";
		centerEvent5.style.color = "transparent";
		centerEvent5.style.transition = "1.5s";
		centerYear5.style.transition = "1.5s";
		centerYear5.style.color = "transparent";
	})
	
	img6.addEventListener("mouseover", function() {
		this.style.backgroundImage = "url('images/gallery6d.jpg')";
		this.style.transition = "0.5s";
		topDecoration6.style.borderColor = "white";
		topDecoration6.style.transition = "1s";
		middleDecoration6.style.borderColor = "white";
		middleDecoration6.style.transition = "2s";
		middleCenter6.style.borderColor = "white";
		middleCenter6.style.transition = "1s";
		bottomDecoration6.style.borderColor = "white";
		bottomDecoration6.style.transition = "1s";
		centerEvent6.style.color = "white";
		centerEvent6.style.transition = "1.5s";
		centerYear6.style.transition = "1.5s";
		centerYear6.style.color = "white";
	})

	img6.addEventListener("mouseout", function() {
		this.style.backgroundImage = "url('images/gallery6.JPG')";
		this.style.transition = "0.5s";
		topDecoration6.style.borderColor = "transparent";
		topDecoration6.style.transition = "1s";
		middleDecoration6.style.borderColor = "transparent";
		middleDecoration6.style.transition = "2s";
		middleCenter6.style.borderColor = "transparent";
		middleCenter6.style.transition = "1s";
		bottomDecoration6.style.borderColor = "transparent";
		bottomDecoration6.style.transition = "1s";
		centerEvent6.style.color = "transparent";
		centerEvent6.style.transition = "1.5s";
		centerYear6.style.transition = "1.5s";
		centerYear6.style.color = "transparent";
	})
	
	img7.addEventListener("mouseover", function() {
		this.style.backgroundImage = "url('images/gallery7d.jpg')";
		this.style.transition = "0.5s";
		topDecoration7.style.borderColor = "white";
		topDecoration7.style.transition = "1s";
		middleDecoration7.style.borderColor = "white";
		middleDecoration7.style.transition = "2s";
		middleCenter7.style.borderColor = "white";
		middleCenter7.style.transition = "1s";
		bottomDecoration7.style.borderColor = "white";
		bottomDecoration7.style.transition = "1s";
		centerEvent7.style.color = "white";
		centerEvent7.style.transition = "1.5s";
		centerYear7.style.transition = "1.5s";
		centerYear7.style.color = "white";
	})

	img7.addEventListener("mouseout", function() {
		this.style.backgroundImage = "url('images/gallery7.jpg')";
		this.style.transition = "0.5s";
		topDecoration7.style.borderColor = "transparent";
		topDecoration7.style.transition = "1s";
		middleDecoration7.style.borderColor = "transparent";
		middleDecoration7.style.transition = "2s";
		middleCenter7.style.borderColor = "transparent";
		middleCenter7.style.transition = "1s";
		bottomDecoration7.style.borderColor = "transparent";
		bottomDecoration7.style.transition = "1s";
		centerEvent7.style.color = "transparent";
		centerEvent7.style.transition = "1.5s";
		centerYear7.style.transition = "1.5s";
		centerYear7.style.color = "transparent";
	})
	
	img8.addEventListener("mouseover", function() {
		this.style.backgroundImage = "url('images/gallery8d.jpg')";
		this.style.transition = "0.5s";
		topDecoration8.style.borderColor = "white";
		topDecoration8.style.transition = "1s";
		middleDecoration8.style.borderColor = "white";
		middleDecoration8.style.transition = "2s";
		middleCenter8.style.borderColor = "white";
		middleCenter8.style.transition = "1s";
		bottomDecoration8.style.borderColor = "white";
		bottomDecoration8.style.transition = "1s";
		centerEvent8.style.color = "white";
		centerEvent8.style.transition = "1.5s";
		centerYear8.style.transition = "1.5s";
		centerYear8.style.color = "white";
	})

	img8.addEventListener("mouseout", function() {
		this.style.backgroundImage = "url('images/gallery8.jpg')";
		this.style.transition = "0.5s";
		topDecoration8.style.borderColor = "transparent";
		topDecoration8.style.transition = "1s";
		middleDecoration8.style.borderColor = "transparent";
		middleDecoration8.style.transition = "2s";
		middleCenter8.style.borderColor = "transparent";
		middleCenter8.style.transition = "1s";
		bottomDecoration8.style.borderColor = "transparent";
		bottomDecoration8.style.transition = "1s";
		centerEvent8.style.color = "transparent";
		centerEvent8.style.transition = "1.5s";
		centerYear8.style.transition = "1.5s";
		centerYear8.style.color = "transparent";
	})	
}

document.addEventListener("DOMContentLoaded", init); 
