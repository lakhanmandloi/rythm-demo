jQuery.getScript('https://cdnjs.cloudflare.com/ajax/libs/rythm.js/2.2.3/rythm.min.js', function() {
    jQuery("header").addClass('rythm-bass');
    jQuery(".tjlmspin").addClass('rythm-bass');
    var rythm = new Rythm();
    rythm.addRythm('twist2', 'twist', 0, 10, { min: 20, max: 180 })
	rythm.setMusic("sample.mp3");
	rythm.start();
});
