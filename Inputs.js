function keyPressed() {
  if (keyIsDown(UP_ARROW)) {
    myShip.moveUp();
  } else if (keyIsDown(DOWN_ARROW)) {
    myShip.moveDown();
  }
}