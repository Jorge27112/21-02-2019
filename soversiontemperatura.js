function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(220);
	var tempMtyF = 55.4;
	tempMtyC = fahrToC(tempMtyF);
	console.log(tempMtyC);
}

function celsiusToF(tempC) {
	var tempF;
	tempF = (9 / 5) * tempC + 32;
	return tempF;
}

function fahrToC(tempF) {
	var tempC;
	tempC = (tempF - 32) * (5 / 9);
	return tempC;
}
