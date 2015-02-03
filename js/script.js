$( function() {
	/**
	 * Main menu.
	 */
	var mainMenu = $( ".sf-menu" );

	// Create the responsive menu by cloning the existing one.
	mainMenu.clone().removeClass().addClass( "rwd-menu" ).prependTo( ".navbar-container nav" );

	// Initialize the superfish menu.
	mainMenu.superfish();

	// Toggle the responsive menu.
	$( "#rwd-trigger" ).on( "click", function(e) {
			e.preventDefault();

			$( ".rwd-menu" ).slideToggle();
		} );
	} );