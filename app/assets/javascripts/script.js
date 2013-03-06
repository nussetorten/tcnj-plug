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
	    $('#faux-form').fadeOut(1000);
	    setTimeout(function(){revealLandingForm()}, 1000);
	}
    });

    hideLandingForm();
    updateAC();

    function hideLandingForm() {
	$('#landing-form').hide();
    };
    function revealLandingForm()  {
	$('#landing-form').slideDown();
    };
    function updateAC() {
	var tags = ["nick","alex","andrew","theresa","joey"];
	$('#faux-form-search-field').autocomplete({ source: tags });
    };
});
