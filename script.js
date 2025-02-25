let currentSketch = null;

function loadSketch(sketchName) {
  // Remove any existing sketch
  if (currentSketch) {
    if (currentSketch.stopAll && typeof currentSketch.stopAll === 'function') {
      currentSketch.stopAll();
    }
    currentSketch.remove();
    currentSketch = null;
  }
  // Clear the container
  document.getElementById("sketch-container").innerHTML = "";

  // Instantiate the chosen sketch using instance mode
  if (sketchName === 'interactive-music') {
    currentSketch = new p5(interactiveMusicSketch, 'sketch-container');
  } else if (sketchName === 'binaural-3d') {
    currentSketch = new p5(binaural3DSketch, 'sketch-container');
  }
}

function stopSketch() {
  if (currentSketch) {
    if (currentSketch.stopAll && typeof currentSketch.stopAll === 'function') {
      currentSketch.stopAll();
    }
    currentSketch.remove();
    currentSketch = null;
  }
  document.getElementById("sketch-container").innerHTML = "<p>Sketch stopped.</p>";
}
