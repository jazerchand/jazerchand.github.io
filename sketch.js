console.log("hola");

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(60);
}

function draw() {
    // background(0,40);
    textSize(90);
    text('🏗️', mouseX,mouseY);
}