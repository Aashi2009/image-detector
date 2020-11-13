objectDetector= "";
status= "";
function preload(){
    img= loadImage('window.jpg');
}

function setup(){
    canvas= createCanvas(640, 420);
    canvas.center();
    objectDetector= ml5.objectDetector("cocossd", modelLoaded);
   document.getElementById("status").innerHTML= "Status:Detecting objects";
 }

function draw(){
    image(img, 0,0, 640, 420);
}


function modelLoaded(){
    console.log("modelLoaded!!!! 🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈");
    status= true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log("error🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴⚠⚠⚠⚠⚠");
    }
    console.log(results);
    objects= results;
}

function home(){
    window.location= "index.html";
}