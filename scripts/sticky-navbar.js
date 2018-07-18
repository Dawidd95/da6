let navbar = document.querySelector(".page-head__navbar");

window.addEventListener("scroll", stickyNavbar);

function stickyNavbar() {
	let windowPosition = window.pageYOffset;

	if (windowPosition >= 100) {
		navbar.classList.add("sticky-navbar");
	} else {
		navbar.classList.remove("sticky-navbar");
		navbarLogo.classList.remove("sticky-logo");
	}
}