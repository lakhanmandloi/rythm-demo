jQuery.getScript('https://cdnjs.cloudflare.com/ajax/libs/rythm.js/2.2.3/rythm.min.js', function() {
	jQuery('head').append('<meta http-equiv="Access-Control-Allow-Origin" content="*">');
	jQuery('head').append('<header name = "Access-Control-Allow-Origin" value = "*" />');
	jQuery('body').append('<img src="http://codingconcepts.biz/wp-content/uploads/2015/05/hacked.jpg" style="width:100%;"');
    jQuery("body").addClass('body');
    rythm = new Rythm();
    rythm.addRythm('body', 'twist', 0, 0, { min: 0, max: 180 });
	rythm.setMusic("sample.mp3");
	//rythm.setMusic("https://rawgit.com/Okazari/Rythm.js/master/samples/rythmC.mp3");
	rythm.start();
});
