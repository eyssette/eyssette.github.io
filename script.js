// Récupérer toutes les balises <section>
const sections = document.querySelectorAll('section');

// Parcourir chaque section
sections.forEach(function(section) {
	// Trouver l'élément <a> dans la section
	const linkElement = section.querySelectorAll('a');

	// Vérifie s'il y a un et un seul lien dans la section
	if (linkElement.length == 1) {
		// Récupérer l'URL du lien
		const linkURL = linkElement[0].getAttribute('href');

		// Ajouter un gestionnaire d'événements pour rediriger vers le lien lorsque la section est cliquée
		section.addEventListener('click', function() {
			window.location.href = linkURL;
		});
	} else {
		section.classList = "noAutoLink"
	}
});


// Changement d'icônes en cas de dark mode
const githubIcon = document.querySelector('img[alt*="Github"]')
const githubIconSrcBase = "img/github"

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	githubIcon.src = githubIconSrcBase + "-white.svg"
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    const newColorScheme = event.matches ? "dark" : "light";
	if (newColorScheme == "dark") {
		githubIcon.src = githubIconSrcBase + "-white.svg"
	} else {
		githubIcon.src = githubIconSrcBase + ".svg"
	}
});