jQuery('head').append('<header name = "Access-Control-Allow-Origin" value = "*" />');

jQuery.getScript('https://cdnjs.cloudflare.com/ajax/libs/rythm.js/2.2.3/rythm.min.js', function() {
    alert('Load was performed.');
    jQuery("div").addClass('rythm-bass');
    var rythm = new Rythm();
	//rythm.setMusic("https://rawgit.com/Okazari/Rythm.js/master/samples/rythmC.mp3");
	//rythm.crossorigin = 'anonymous';
	rythm.start();
});


