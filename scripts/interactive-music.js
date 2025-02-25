function interactiveMusicSketch(p) {
    let calmLoop, intenseLoop;
  
    p.preload = function() {
      p.userStartAudio(); // Ensure audio is allowed
      calmLoop = p.loadSound("sounds/calm-loop.mp3", () => {
      });
      intenseLoop = p.loadSound("sounds/intense-loop.mp3", () => {
      });
    };
  
    p.setup = function() {
      // Create the canvas
      let canvas = p.createCanvas(400, 200);
      canvas.parent("sketch-container");
  
      // Create a container for the buttons
      let buttonContainer = p.createDiv();
      buttonContainer.parent("sketch-container");
      // Style it as a flexbox so the buttons are centered
      buttonContainer.style("display", "flex");
      buttonContainer.style("justify-content", "center");
      buttonContainer.style("gap", "10px");
      buttonContainer.style("margin-top", "15px");
  
      // Create buttons
      let calmButton = p.createButton("Play Calm");
      calmButton.parent(buttonContainer);
      calmButton.mousePressed(() => toggleMusic("calm"));
  
      let intenseButton = p.createButton("Play Intense");
      intenseButton.parent(buttonContainer);
      intenseButton.mousePressed(() => toggleMusic("intense"));
    };
  
    function toggleMusic(type) {
      p.userStartAudio(); // Ensure audio is active
      if (type === "calm") {
        if (!calmLoop.isPlaying()) {
          calmLoop.loop();
          if (intenseLoop.isPlaying()) {
            intenseLoop.stop();
          }
        } else {
          calmLoop.stop();
        }
      } else if (type === "intense") {
        if (!intenseLoop.isPlaying()) {
          intenseLoop.loop();
          if (calmLoop.isPlaying()) {
            calmLoop.stop();
          }
        } else {
          intenseLoop.stop();
        }
      }
    }
  
    // Stop function if needed by the global stop button
    p.stopAll = function() {
      if (calmLoop && calmLoop.isPlaying()) calmLoop.stop();
      if (intenseLoop && intenseLoop.isPlaying()) intenseLoop.stop();
    };
  }
  