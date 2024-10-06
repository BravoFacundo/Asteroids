function spawnObjects() {
  obstacles = new Array(amount);
  energy = new Array(amount);
  for (let i = 0; i < amount; i++) {
    obstacles[i] = new Obstacle(
      spawn,
      random(50, window.innerHeight),
      7,
      speed,
      "data/asteroid_01.png"
    );
    energy[i] = new Energy(spawn, random(50, window.innerHeight), 7, speed);
    spawn += 100;
  }
}
