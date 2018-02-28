jQuery.getScript('https://cdnjs.cloudflare.com/ajax/libs/rythm.js/2.2.3/rythm.min.js', function() {
    jQuery("header").addClass('rythm-bass');
    var rythm = new Rythm();
	rythm.setMusic("sample.mp3");
	rythm.start();
});
//lakhandemo
