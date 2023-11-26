// Récupérer toutes les balises <section>
const sections = document.querySelectorAll("section");

// Parcourir chaque section
sections.forEach(function (section) {
	// Trouver l'élément <a> dans la section
	const linkElement = section.querySelectorAll("a");

	// Vérifie s'il y a un et un seul lien dans la section
	if (linkElement.length == 1) {
		// Récupérer l'URL du lien
		const linkURL = linkElement[0].getAttribute("href");

		// Ajouter un gestionnaire d'événements pour rediriger vers le lien lorsque la section est cliquée
		section.addEventListener("click", function () {
			window.location.href = linkURL;
		});
	} else {
		section.classList = "noAutoLink";
	}
});

// Initialise le mode préféré

// Crée l'élément div
const modeDiv = document.createElement("div");
modeDiv.className = "mode";

// Ajoute la div au document
document.body.insertBefore(modeDiv, document.querySelector("header"));

// Écoute les clics sur les emojis
modeDiv.addEventListener("click", () => {
	mode == "dark" ? (mode = "light") : (mode = "dark");
	defineMode(mode);
});

function defineMode(m) {
	if (m == "light") {
		modeDiv.textContent = "🌙";
		githubIcon.src = githubIconSrcBase + ".svg";
	} else {
		modeDiv.textContent = "☀️";
		githubIcon.src = githubIconSrcBase + "-white.svg";
	}
	document.documentElement.setAttribute("data-theme", mode);
}

// Changement d'icônes en cas de dark mode
const githubIcon = document.querySelector('img[alt*="Github"]');
const githubIconSrcBase = "img/github";
let mode = "light";

if (
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches
) {
	githubIcon.src = githubIconSrcBase + "-white.svg";
	mode = "dark";
	defineMode(mode);
} else {
	githubIcon.src = githubIconSrcBase + ".svg";
	mode = "light";
	defineMode(mode);
}

window
	.matchMedia("(prefers-color-scheme: dark)")
	.addEventListener("change", (event) => {
		const newColorScheme = event.matches ? "dark" : "light";
		if (newColorScheme == "dark") {
			mode = "dark";
			githubIcon.src = githubIconSrcBase + "-white.svg";
			defineMode(mode);
		} else {
			mode = "light";
			githubIcon.src = githubIconSrcBase + ".svg";
			defineMode(mode);
		}
	});