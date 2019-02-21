function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  var a = 12;
  var b = 12;
  var c = hipotenusa(a, b);
  console.log(c);
}

function hipotenusa(a, b) {
  var hipotenusa;
  hipotenusa = (sqrt((a * a) + (b * b)));
  return hipotenusa;
}
