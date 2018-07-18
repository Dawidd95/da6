function init() {
	let groups = document.querySelector("a[href='#page-head__groups-menu']");
	let groupsMenu = document.querySelector(".page-head__groups-menu");
	let events = document.querySelector("a[href='#page-head__events-menu']");
	let eventsMenu = document.querySelector(".page-head__events-menu");


	let acc = document.getElementsByClassName("overlay-content__offer-header"); //do tel
	
	for ( let i = 0; i < acc.length; i++) {   //do tel
		acc[i].addEventListener("click", showContent);
	}

	function showContent() {  //do tel
        this.nextElementSibling.classList.toggle("open-menu");
        this.classList.toggle("offer-background");
	}

	groups.addEventListener("mouseover", function() {
		groupsMenu.style.display = "flex";
		eventsMenu.style.display = "none";
		groups.style.color = "#10c1af";
		events.style.color = "white";
	})

	groupsMenu.addEventListener("mouseover", function() {
		groupsMenu.style.display = "flex";
		groups.style.color = "#10c1af";
	})
			
	groupsMenu.addEventListener("mouseout", function() {
		groupsMenu.style.display = "none";
		groups.style.color = "white";
	})

	events.addEventListener("mouseover", function() {
		events.style.color = "#10c1af";
		eventsMenu.style.display = "flex";
		groupsMenu.style.display = "none";
		groups.style.color = "white";
	})
	
	eventsMenu.addEventListener("mouseover", function() {
		eventsMenu.style.display = "flex";
		events.style.color = "#10c1af";
	})
			
	eventsMenu.addEventListener("mouseout", function() {
		eventsMenu.style.display = "none";
		events.style.color = "white";
	})
}

document.addEventListener("DOMContentLoaded", init);