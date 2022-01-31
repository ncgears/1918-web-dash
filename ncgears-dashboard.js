//Make the tabs component
$( "#tabs" ).tabs({
	heightStyle: "fill"
});

//Create hover actions for static elements
$( "#icons li" ).hover(
	function() {
		$( this ).addClass( "ui-state-hover" );
	},
	function() {
		$( this ).removeClass( "ui-state-hover" );
	}
);
