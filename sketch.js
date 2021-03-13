var mr
function setup() {
    createCanvas(800,400);
    mr = createSprite(200,300,20,20);
}

function draw() {
    background(0);
    if(mr.y>399 && mr.y<400){
        mr.y = mr.y-10;
    }
    
    mr.y=mr.y+0.8;
    
    drawSprites();
}