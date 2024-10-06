class State {
  constructor() {
    this.state = "menu";
  }

  start() {
    if (this.state === "menu") {
      background(0);
      textAlign(CENTER);
      textSize(100);
      fill("#5683A3");
      text("Space Waves", width / 2, height / 2);

      if (keyIsPressed && key === " ") {
        this.state = "level1-";
      }
    } else if (this.state === "level1-") {
      background(0);
      textAlign(CENTER);
      textSize(100);
      fill(255, 0, 0);
      text("Level 1", width / 2, height / 2);

      if (keyIsPressed && keyCode === ENTER) {
        this.state = "level1";
      }
    } else if (this.state === "level1") {
      myShip.draw();
      for (let i = 0; i < amount; i++) {
        obstacles[i].draw();
        energy[i].draw();
      }
      if (passed === amount) {
        this.state = "level2-";
      }
    } else if (this.state === "level2-") {
      background(0);
      textAlign(CENTER);
      textSize(100);
      fill(255, 0, 0);
      text("Level 2", width / 2, height / 2);

      if (keyIsPressed && keyCode === ENTER) {
        amount = 15;
        speed = 4;
        passed = 0;
        spawn = width;
        this.state = "level2";
        spawnObjects();
      }
    } else if (this.state === "level2") {
      myShip.draw();
      for (let i = 0; i < amount; i++) {
        obstacles[i].draw();
        energy[i].draw();
      }
      if (passed === amount) {
        this.state = "level3-";
      }
    } else if (this.state === "level3-") {
      background(0);
      textAlign(CENTER);
      textSize(100);
      fill(255, 0, 0);
      text("Level 3", width / 2, height / 2);

      if (keyIsPressed && keyCode === ENTER) {
        amount = 20;
        speed = 6;
        passed = 0;
        spawn = width;
        this.state = "level3";
        spawnObjects();
      }
    } else if (this.state === "level3") {
      myShip.draw();
      for (let i = 0; i < amount; i++) {
        obstacles[i].draw();
        energy[i].draw();
      }
      if (passed === amount) {
        this.state = "youWon";
      }
    } else if (this.state === "youWon") {
      background(0);
      textAlign(CENTER);
      textSize(100);
      fill(255, 0, 0);
      text("You Won!", width / 2, height / 2);

      if (keyIsPressed && keyCode === ENTER) {
        amount = 10;
        speed = 2;
        passed = 0;
        spawn = width;
        this.state = "menu";
        spawnObjects();
      }
    }

    if (myShip.energy <= 0) {
      this.state = "youLost";
    }

    if (this.state === "youLost") {
      background(0);
      textAlign(CENTER);
      textSize(100);
      fill(255, 0, 0);
      text("You Lost", width / 2, height / 2);

      if (keyIsPressed && keyCode === ENTER) {
        passed = 0;
        spawn = width;
        this.state = "menu";
      }
    }
  }
}
