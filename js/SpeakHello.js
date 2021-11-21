(function (window) {
  // DO NOT attach the speakWord variable to the 'helloSpeaker' object.
  const speakWord = "Hello";

  const helloSpeaker = {};

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.helloSpeaker = helloSpeaker;
})(window);
