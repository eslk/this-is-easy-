cool = "";
status1 = "";
function preload(){
 cool = createVideo("video.mp4");
 cool.hide();                      
}

function setup(){
canvas = createCanvas(345,345);
canvas.position(620,150);
}

function draw(){
    image(cool, 0,0,380,480);
}

 function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Object.";
 }

 function modelLoaded(){
    console.log("Model loaed!");
    status1 = true;
    video.loop();
    video.speed(1);
    video.volume(0);
 }


