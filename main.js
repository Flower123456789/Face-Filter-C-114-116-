
noseX=0;
noseY=0;


function preload(){
 clown_nose = loadImage('https://i.postimg.cc/D0NPFSCb/clown-nose-png-2.png');
sungalsses = loadImage('https://i.postimg.cc/hGG8J8H7/sungalsses.png');
}


function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.position(400,200);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw(){
 
    image(video, 0,0, 300, 300);
    image(clown_nose, noseX , noseY, 30 ,30);
    image(sungalsses, noseX-30, noseY-30, 95, 40);
}


function take_snapshot(){
    save('Melaina_114_class.png');
}


function modelLoaded() {
    console.log('PoseNet Is Initialized');
}


function gotPoses(results) {

    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-10;
        console.log("nose x =" + results[0].pose.nose.x);
        console.log("nose y =" + results[0].pose.nose.y);
}
}