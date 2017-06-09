var Spot ={
  x:0,
  y:0,
  d:0,
  col: {
    r:0,
    g:0,
    b:0
  },
  colorPicker: function(){
    this.col.r = random(100, 255);
    this.col.b = random(100, 190);
  },
  blot: function(){
    this.x = random(0, width);
    this.y = random(0, height);
    this.d = random(10, 75);
  },
  display: function() {
    noStroke();
    fill(this.col.r, this.col.g, this.col.b, 80);
    ellipse(this.x, this.y, this.d, this.d);
  }
};

function setup() {
  createCanvas(1600, 900);
  background('#ffff8d');
}

function draw() {
  if (mouseIsPressed) {
      Spot.colorPicker();
      Spot.blot();
      Spot.display();
  }
}
