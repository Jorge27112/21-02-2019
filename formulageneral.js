function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  var a = 11;
  var b = -40;
  var c = 3;
  solucion1 = formulageneralmas(a, b, c);
  solucion2 = formulageneralmenos(a, b, c);
  console.log(solucion1);
}

function formulageneralmas(a, b, c) {
  var solucion1 = (-b + sqrt(pow(b, 2) - (4 * c * a))) / (2 * a);
  return solucion1;
}

function formulageneralmenos(a, b, c) {
  var solucion2 = (-b - sqrt(pow(b, 2) - (4 * c * a))) / (2 * a);
  return solucion2;
}
