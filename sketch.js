console.log("hola");

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(60);
}

function draw() {
    // background(0,40);
    textSize(96);
    text('❄️', mouseX,mouseY);
}