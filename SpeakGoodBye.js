// NOTE! The steps in this file are basically identical to the ones you
// performed in the SpeakHello.js file.

(function (window) {
  // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
  var speakWord = "Good Bye";

  var byeSpeaker = {};

  byeSpeaker.speak(name){
    console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker;

})(window);

