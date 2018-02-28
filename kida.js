// Import Rythm Js
var imported1 = document.createElement('script');
imported1.src = 'https://cdnjs.cloudflare.com/ajax/libs/rythm.js/2.2.3/rythm.min.js';
document.head.appendChild(imported1);

// Append rythm-bass class to each div
jQuery("div").addClass('rythm-bass');

// Intialize Dancing

var rythm = new Rythm();
rythm.setMusic("https://raw.githubusercontent.com/Okazari/Rythm.js/master/samples/rythmC.mp3");
rythm.start();
