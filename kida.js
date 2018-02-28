jQuery.getScript('https://cdnjs.cloudflare.com/ajax/libs/rythm.js/2.2.3/rythm.min.js', function() {
    jQuery("body").addClass('body');
    var rythm = new Rythm();
    rythm.addRythm('body', 'twist', 0, 0, { min: 0, max: 360 });
    //rythm.addRythm('thumbnail', 'twist', 0, 10, { min: 10, max: 270 })
    //rythm.addRythm('tjlmspin', 'twist', 0, 10, { min: 10, max: 270 })
	rythm.setMusic("sample.mp3");
	rythm.start();
});
