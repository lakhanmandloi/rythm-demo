// Import jQuery & Rythm Js
var imported = document.createElement('script');
imported.src = 'https://code.jquery.com/jquery-3.3.1.min.js';
document.head.appendChild(imported);
imported.src = 'https://cdnjs.cloudflare.com/ajax/libs/rythm.js/2.2.3/rythm.min.js';
document.head.appendChild(imported);

// Append rythm-bass class to each div
$("div").addClass('rythm-bass');

// Intialize Dancing

var rythm = new Rythm();
rythm.setMusic("path/to/sample.mp3");
rythm.start();
