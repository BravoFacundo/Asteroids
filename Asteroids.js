let myShip;
let obstacles = [];
let passed = 0;
let energy = [];
let myState;
let backgroundImg;
let amount = 10;
let speed = 2;

let spawn;

function preload() {
  backgroundImg = loadImage("data/background.jpg");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  spawn = window.innerWidth;
  myState = new State();
  myShip = new Ship(
    window.innerHeight / 2,
    5,
    25,
    "#567C98",
    "data/ship_02.png"
  );

  spawnObjects();
}

function draw() {
  image(backgroundImg, 0, 0, window.innerWidth, window.innerHeight);
  myState.start();
  text(myShip.energy, 200, 200);

  for (let i = 0; i < amount; i++) {
    obstacles[i].inflictDamage(myShip);
    energy[i].gainEnergy(myShip);

    if (obstacles[i].isPassed()) {
      passed++;
    }
  }
}
