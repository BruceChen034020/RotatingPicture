var button1, button2;
var slider1;
var img1, img2;

function setup(){
  createCanvas(800, 600);
  background(0);
  button1 = createButton("黃于軒");
  button2 = createButton("楊鈞任");
  createP('');
  slider1 = createSlider();
  img1 = loadImage("Huang.jpg");
  img2 = loadImage("Yang.jpg");
  button1.mousePressed(DisplayImg1);
  image(img1, 0, 0);
  image(img1, 0, 0, 100, 100);
  image(img1, 0, 0, 100, 100, 0, 0, 100, 100);
  console.log(img1.toString());
  console.log(img1);
}

function draw(){

}

function DisplayImg1(){
  //image(img1, 0, 0);
  image(img1, 0, 0, 100, 100);
  //image(img1, 0, 0, 100, 100, 0, 0, 100, 100);
}
