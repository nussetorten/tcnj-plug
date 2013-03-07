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
	    setTimeout(function(){showMoreButton()}, 5000);
	}
    });
    $('#button').click(function() {
	hideMoreButton();
	revealLandingForm();
	setTimeout(function(){showMoreButton()}, 5000);
    });
    $('#i-who').keyup(function(event) {
	if(event.keyCode == 13) {
	    $('#button').click();
	}
    });
	    

    hideLandingForm();
    updateWhoAC();
//    winkMoreButton(true);

    function winkMoreButton(faded) {
	if(faded) {
	    $('#landing-form > img').fadeTo(900, 1.00);
	} else {
	    $('#landing-form > img').fadeTo(900, 0.00);
	}
	setTimeout(function(){winkMoreButton(!faded)}, 1000);
    };
    function showMoreButton() {
	$('#button').fadeIn();
    };
    function hideMoreButton() {
	$('#button').fadeOut();
    };
    function hideFauxForm() {
	$('#faux-form').fadeTo(500, 0.00);
    };
    function hideLandingForm() {
	$('#landing-form > div').hide();
	$('#landing-form > p').hide();
    };
    function revealLandingForm()  {
	$('#landing-form > div:hidden:first').slideDown();
    };
    function updateWhoAC() {
	$.getJSON('/clubs.json', function(data) {
	    $('#i-who').autocomplete({ source: data });
	});
    };
});
