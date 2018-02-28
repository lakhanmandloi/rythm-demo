jQuery('head').append('<header name = "Access-Control-Allow-Origin" value = "*" />');

jQuery.getScript('https://cdnjs.cloudflare.com/ajax/libs/rythm.js/2.2.3/rythm.min.js', function() {
    alert('Load was performed.');
    jQuery("div").addClass('rythm-bass');
    var rythm = new Rythm();
	rythm.setMusic("172.132.45.39/vaptshika1/sample.mp3");
	//rythm.crossorigin = 'anonymous';
	rythm.start();
});


