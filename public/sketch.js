var chosenColor;

function setup() {
  canvas = createCanvas(window.innerWidth * .9, window.innerHeight * .9);
  canvas.position(25, 25);
  background(0, 0, 40);

  chosenColor = color(40, 0, 80);

/* 
  USE BUTTONS TO SELECT COLOR 
  IF I STAY WITH BUTTONS THEY SHOULD AT LEAST BECOME CIRCULAR COLORS LIKE PICKING A SWATCH
*/
  buttonHandler('White', 255, 255, 255);
  buttonHandler('Red', 196, 1, 1);
  buttonHandler('Green', 155, 244, 66);
  buttonHandler('Blue', 7, 46, 109)
  buttonHandler('Light Blue', 9, 186, 239);
  buttonHandler('Pink', 239, 9, 178);

  random = createButton("Random");
  random.mousePressed(function() {
    var rr = Math.round(Math.random(0, 255) * 100);
    var rg = Math.round(Math.random(0, 255) * 100);
    var rb = Math.round(Math.random(0, 255) * 100);

    console.log(`rr: ${rr}, rg: ${rg}, rb: ${rb}`)
    chosenColor = color(rr, rg, rb);
  });


  lineSizeSlider = createSlider(5, 72, 36);  

/* USE RGB SLIDERS TO CHOOSE COLOR
   NEED TO MAKE A COLOR PICKER THOUGH - WOULD BE BETTER
  redSlider = createSlider(0, 255, 50);
  blueSlider = createSlider(0, 255, 0);
  greenSlider = createSlider(0, 255, 20);
*/ 
}
 
function draw() {
	// do nothing
}

function mouseDragged() { 
	strokeWeight(lineSizeSlider.value());
/* FOR USE WITH THE RGB SLIDERS
  stroke(redSlider.value(), greenSlider.value(), blueSlider.value());
*/
  // stroke with buttons instead
  stroke(chosenColor);
	line(mouseX, mouseY, pmouseX, pmouseY);
}

function buttonHandler(title, r, g, b) {
  title = createButton(title);
  title.mousePressed(function() {
    chosenColor = color(r, g, b)
  });
  return title;
}

