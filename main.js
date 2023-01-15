function preload() {
}

function setup() {
createCanvas(600, 600);
canvas.center();
}

function draw() {
    image(video, 0, 0, 600, 600);
}

function take_snapshot(){
    save('myface.jpeg');
}
