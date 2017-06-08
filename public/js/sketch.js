var spot ={
  x: 0,
  y:0,
  d:0
};

var col = {
  r:0,
  g:0,
  b:0
};


function setup() {
  createCanvas(1600, 900);
  background('#ffff8d');
}

function draw() {
  col.r = random(100, 255);
  col.b = (100, 190);
  spot.x = random(0, 1600);
  spot.y = random(0, 900);
  spot.d = random(10, 75);
  noStroke();
  fill(col.r, col.g, col.b, 80);
  ellipse(spot.x, spot.y, spot.d, spot.d);
}
