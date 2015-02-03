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


	/**
	 * Animations.
	 */
	$( "#demo-animations" ).find( ".demo-col" ).on( "click", function() {
		var $this = $( this );

		$this.addClass( "animated " + $this.attr( 'id' ) );
	} );

	/**
	 * Tabs.
	 */
	$( ".tabs-links a" ).on( "click", function( e ) {
		e.preventDefault();

		// Get the target tab.
		var newTab = $( this ).attr( "href" );

		// Show the targeted tab content while hiding the rest.
		$( newTab ).show().siblings().hide();

		// Add the active class to the parent list item while removing it from the rest.
		$( this ).parent( "li" ).addClass( "active" ).siblings().removeClass( "active" );
	} );
	 






	} );