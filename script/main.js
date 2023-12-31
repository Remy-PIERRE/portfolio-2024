console.log("Hello main !");

const initPage = () => {
	const menuMobileButton = document.querySelector("#menuMobileButton");
	menuMobileButton.addEventListener("click", handleMenuMobileOpening);

	const links = document.querySelectorAll(".menu--nav--link");
	links.forEach((link) => link.addEventListener("click", handleNavLinkClick));

	document
		.querySelector("#navLinkHome")
		.dispatchEvent(new CustomEvent("click"));

	document.querySelector("#linkProjects").addEventListener("click", () => {
		document
			.querySelector("#navLinkProjects")
			.dispatchEvent(new CustomEvent("click"));
	});

	const cards = document.querySelectorAll(".card--wrapper");
	cards.forEach((card) => card.addEventListener("click", handleCardClick));
};

const handleMenuMobileOpening = () => {
	const menuMobile = document.querySelector("#menu");
	menuMobile.classList.toggle("opened");

	const menuMobileButton = document.querySelector("#menuMobileButton");
	menuMobileButton.classList.toggle("change");
};

const handleNavLinkClick = (event) => {
	const link = event.currentTarget;
	const links = document.querySelectorAll(".menu--nav--link");
	const sections = document.querySelectorAll(".section--container");

	links.forEach((link) => {
		if ([...link.classList].includes("active")) link.classList.toggle("active");
	});
	link.classList.toggle("active");

	sections.forEach((section) => {
		if (![...section.classList].includes("hidden"))
			section.classList.toggle("hidden");
	});
	switch (link.id) {
		case "navLinkHome":
			[...sections]
				.find((section) => section.id === "sectionHome")
				.classList.toggle("hidden");
			history.pushState({}, "", "#accueil");
			break;
		case "navLinkAbout":
			[...sections]
				.find((section) => section.id === "sectionAbout")
				.classList.toggle("hidden");
			history.pushState({}, "", "#a-propos");
			break;
		case "navLinkServices":
			[...sections]
				.find((section) => section.id === "sectionServices")
				.classList.toggle("hidden");
			history.pushState({}, "", "#services");
			break;
		case "navLinkContact":
			[...sections]
				.find((section) => section.id === "sectionContact")
				.classList.toggle("hidden");
			history.pushState({}, "", "#contact");
			break;
		case "navLinkProjects":
			[...sections]
				.find((section) => section.id === "sectionProjects")
				.classList.toggle("hidden");
			history.pushState({}, "", "#projets");
			break;
		default:
			break;
	}

	const menuMobile = document.querySelector("#menu");
	if ([...menuMobile.classList].includes("opened"))
		menuMobile.classList.toggle("opened");

	const menuMobileButton = document.querySelector("#menuMobileButton");
	if ([...menuMobileButton.classList].includes("change"))
		menuMobileButton.classList.toggle("change");
};

const handleCardClick = (event) => {
	const card = event.currentTarget;

	card.querySelector("p").classList.toggle("invisible");
};

initPage();

// DEV - select vue //
// document
// 	.querySelector("#navLinkServices")
// 	.dispatchEvent(new CustomEvent("click"));
