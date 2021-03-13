var mr
function setup() {
    createCanvas(800,400);
    mr = createSprite(200,300,90,50);
}

function draw() {
    background(0);
    if(mr.y>399){
        mr.y = mr.y-50;
    }
    mr.y=mr.y+0.2;
    drawSprites();
}