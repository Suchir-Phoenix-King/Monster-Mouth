noseX = 0;
noseY = 0;

function preload() {
    monster_mouth = "https://i.postimg.cc/j57hXN4B/268-2684912-mouth-monster-creepy-sticker-by-nancy-tainara-cartoon.png";
}

function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is intialized");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = " + noseX);
        console.log("Nose Y = " + noseY);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(monster_mouth, noseX, 100 - noseY, 50, 50)
}

function take_snapshot() {
    save('My-MoNsTeR-MoUtH');
}