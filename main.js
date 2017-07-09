var button1, button2;
var slider1;
var img1, img2;

function preload(){
  img1 = loadImage("Project003/001.jpg");
  img2 = loadImage("Project003/002.jpg");
}

function setup(){
  createCanvas(800, 600);
  background(0);
  button1 = createButton("鍾凱恩");
  button2 = createButton("張頌宇");
  createP('');
  slider1 = createSlider();
  img1 = loadImage("001.jpg");
  img2 = loadImage("002.jpg");
  button1.mousePressed(DisplayImg1);
  image(img1, 0, 0);
  image(img1, 0, 0, 100, 100);
  image(img1, 0, 0, 100, 100, 0, 0, 100, 100);
}

function draw(){

}

function DisplayImg1(){
  //image(img1, 0, 0);
  image(img1, 0, 0, 100, 100);
  //image(img1, 0, 0, 100, 100, 0, 0, 100, 100);
}
