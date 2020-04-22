/*attache/écoute une fonction sur l'évènement scroll*/
window.addEventListener('scroll', function(e) {
	
	/*Changement de la mise en forme du menu de navigation lorsque l'utilisateur fait défiler le site*/
	if (window.scrollY >= 60) {

		/*Vérification de l'existence de l'id "nav_normal"*/
		if ( document.getElementById("nav_normal") )
			document.getElementById("nav_normal").id = "nav_scrolled";
	} else {

		/*Vérification de l'existence de l'id "nav_scrolled"*/
		if ( document.getElementById("nav_scrolled") )
			document.getElementById("nav_scrolled").id = "nav_normal";
	}

	/*Gère l'apparition ou non de la flèche pour revenir en haut du site lorsque l'utilisateur fait défiler le site*/
	if (window.scrollY >= 500) {
		
		/*Vérification de l'existence de l'id "fleche_scroll_invisible"*/
		if ( document.getElementById("fleche_scroll_invisible") )
			document.getElementById("fleche_scroll_invisible").id = "fleche_scroll_visible";
	} else {

		/*Vérification de l'existence de l'id "fleche_scroll_visible"*/
		if ( document.getElementById("fleche_scroll_visible") )
			document.getElementById("fleche_scroll_visible").id = "fleche_scroll_invisible";
	}
});