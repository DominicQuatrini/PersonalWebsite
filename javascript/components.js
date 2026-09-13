function htmlNavbar() {
    const navbar = document.getElementById('navbarComponent');
    navbar.innerHTML = 
    `
    <nav class="navbar" id="animated-nav">
		<a href="index.html">home</a>
		<a href="projects.html">projects</a>
		<a href="albums.html">albums</a>
		<a href="concerts.html">concerts</a>
	</nav>
    `
}

function htmlFooter() {
    const footer = document.getElementById('footerComponent');
    footer.innerHTML =
    `
    <footer>
		<p>Copyright © 2026 Dominic Quatrini</p>
        <div id="socials">
		    <a href="https://www.linkedin.com/in/dominicquatrini/" target="_blank"><img src="assets/icons/linkedin.svg" alt="LinkedIn" height=35px width=35px></a>
		    <a href="https://www.github.com/DominicQuatrini" target="_blank"><img src="assets/icons/github.svg" alt="GitHub" height=35px width=35px></a>
	    </div>
    </footer>
    `
}