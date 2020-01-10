$("a[data-link]").each(function() {
	console.log(this.parentElement);
	$(this.parentElement).click(() => {
		console.log("clicked");
	});
});
