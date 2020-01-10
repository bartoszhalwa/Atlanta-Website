const sections = document.querySelectorAll("section[data-section]");
const linkActive = document.querySelector(".activeLink");

const observerOptions = {
	threshold: 0.6,
};

let onObserver = entries => {
	let intersectingEntries = entries.filter(el => {
		return el.isIntersecting;
	});

	let iee = intersectingEntries[0];
	if (iee) {
		const link = document.querySelector(
			`a[data-link="${iee.target.dataset.section}"]`
		);
		linkActive.style.width = link.offsetWidth + 10 + "px";
		linkActive.style.top = link.offsetTop + link.offsetHeight + "px";
		linkActive.style.left = link.offsetLeft - 5 + "px";
	}
};

let observer = new IntersectionObserver(onObserver, observerOptions);

sections.forEach(section => {
	observer.observe(section);
});
