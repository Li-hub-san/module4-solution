(function (window) {
  // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
  const speakWord = "Good Bye";

  const byeSpeaker = {};

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker;
})(window);
