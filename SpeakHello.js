
(function (window){
  // DO NOT attach the speakWord variable to the 'helloSpeaker' object.
  var speakWord = "Hello";

  var helloSpeaker = {};

  helloSpeaker.speak = function(name){
    console.log(speakWord + " " + name);
  };

  window.helloSpeaker = helloSpeaker;

  // (Note, Step 6 will be done in the SpeakGoodBye.js file.)
  // xxxx.xxxx = helloSpeaker;
})(window);


