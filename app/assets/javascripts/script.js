$(function() {
    $('#tags').sortable({ axis: "x" });

    $('li.lbutton').click(function() {
	$('ul#tiles > li.tile:first').appendTo('ul#tiles-hideout');
	$('ul#tiles-hideout > li.tile:first').insertBefore('ul#tiles > li.rbutton');	
    });
    $('li.rbutton').click(function() {
	$('ul#tiles > li.tile:last').prependTo('ul#tiles-hideout');
	$('ul#tiles-hideout > li.tile:last').insertAfter('ul#tiles > li.lbutton');	
    });

    $('#faux-form-search-field').keyup(function(event) {
	if(event.keyCode == 13) {
	    $('#i-what').val($('#faux-form-search-field').val());
	    hideFauxForm();
	    setTimeout(function(){revealLandingForm()}, 1000);
	}
    });

    hideLandingForm();
    updateWhoAC();

    function hideFauxForm() {
	$('#faux-form').fadeTo(500, 0.00);
    };
    function hideLandingForm() {
	$('#landing-form').hide();
    };
    function revealLandingForm()  {
	$('#landing-form').slideDown();
    };
    function updateWhoAC() {
	$.getJSON('/clubs.json', function(data) {
	    $('#i-who').autocomplete({ source: data });
	});
    };
});
