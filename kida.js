jQuery.getScript('https://cdnjs.cloudflare.com/ajax/libs/rythm.js/2.2.3/rythm.min.js', function() {
    jQuery(".row").addClass('rythm-bass');
    var rythm = new Rythm();
	rythm.setMusic("http://172.132.45.39/vaptshika1/sample.mp3");
	rythm.start();
});
