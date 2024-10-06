class Ship {
  constructor(posY, energy, size, color, imageName) {
    this.posY = posY;
    this.energy = energy;
    this.size = size;
    this.color = color;
    this.image = loadImage(imageName);
  }

  draw() {
    push();
    image(this.image, 0, this.posY);
    pop();
  }

  moveUp() {
    if (this.posY - 50 > 0) {
      this.posY -= 50;
    }
  }

  moveDown() {
    if (this.posY < height - 50) {
      this.posY += 50;
    }
  }

  receiveDamage() {
    this.energy--;
  }

  gainEnergy() {
    this.energy++;
  }
}

class Obstacle {
  constructor(posX, posY, size, speed, imageName) {
    this.posX = posX;
    this.posY = posY;
    this.size = size;
    this.speed = speed;
    this.image = loadImage(imageName);
    this.dealtDamage = false;
    this.passed = false;
  }

  draw() {
    rect(this.posX, this.posY, this.size, this.size);
    image(this.image, this.posX-- - 95, this.posY - 93);
    this.posX -= this.speed;
  }

  inflictDamage(ship) {
    if (!this.dealtDamage) {
      if (
        dist(ship.posY + this.size / 2, 105, this.posY, this.posX) < 40 ||
        dist(ship.posY - this.size / 2, 45, this.posY, this.posX) < 50
      ) {
        ship.receiveDamage();
        this.dealtDamage = true;
      }
    }
  }

  isPassed() {
    if (!this.passed) {
      if (this.posX < 40) {
        this.passed = true;
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

class Energy {
  constructor(posX, posY, size, speed) {
    this.posX = posX;
    this.posY = posY;
    this.size = size;
    this.speed = speed;
    this.gainEnergy = false;
  }

  draw() {
    rect(this.posX, this.posY, this.size, this.size);
    this.posX -= this.speed;
  }

  collectEnergy(ship) {
    if (!this.gainEnergy) {
      if (
        dist(ship.posY + this.size / 2, 105, this.posY, this.posX) < 40 ||
        dist(ship.posY - this.size / 2, 45, this.posY, this.posX) < 50
      ) {
        ship.gainEnergy();
        this.gainEnergy = true;
      }
    }
  }
}
