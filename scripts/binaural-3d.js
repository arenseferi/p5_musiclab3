function binaural3DSketch(p) {
    let ambient, leftSound, rightSound, movingSound;
    let angle = 0;
    let isPlaying = false;
  
    p.preload = function() {
      p.userStartAudio();
      ambient = p.loadSound("sounds/ambient.mp3", () => {
      });
      leftSound = p.loadSound("sounds/left.mp3", () => {
      });
      rightSound = p.loadSound("sounds/right.mp3", () => {
      });
      movingSound = p.loadSound("sounds/move.mp3", () => {
      });
    };
  
    p.setup = function() {
      // Create the canvas
      let canvas = p.createCanvas(400, 200);
      canvas.parent("sketch-container");
  
      // Create a container for the button
      let buttonContainer = p.createDiv();
      buttonContainer.parent("sketch-container");
      // Style it as a flexbox so the button is centered
      buttonContainer.style("display", "flex");
      buttonContainer.style("justify-content", "center");
      buttonContainer.style("margin-top", "15px");
  
      // Create the Start button
      let startButton = p.createButton("Start 3D Sound");
      startButton.parent(buttonContainer);
      startButton.mousePressed(() => {
        if (!isPlaying) {
          playSounds();
          isPlaying = true;
        }
      });
    };
  
    function playSounds() {
      p.userStartAudio();
      ambient.loop();
      ambient.setVolume(0.3);
  
      leftSound.loop();
      leftSound.pan(-1);
      leftSound.setVolume(1.0); // Full volume for left
  
      rightSound.loop();
      rightSound.pan(1);
      rightSound.setVolume(0.6); // Lowered volume for right
  
      movingSound.loop();
      movingSound.setVolume(0.5); // Lowered volume for moving sound
    }
  
    p.draw = function() {
      let panning = p.sin(angle);
      if (movingSound && movingSound.isPlaying()) {
        movingSound.pan(panning);
      }
      angle += 0.02;
    };
  
    // Stop function if needed by the global stop button
    p.stopAll = function() {
      if (ambient && ambient.isPlaying()) ambient.stop();
      if (leftSound && leftSound.isPlaying()) leftSound.stop();
      if (rightSound && rightSound.isPlaying()) rightSound.stop();
      if (movingSound && movingSound.isPlaying()) movingSound.stop();
    };
  }
  