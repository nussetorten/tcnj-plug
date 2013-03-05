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
});