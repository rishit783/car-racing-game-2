var hypnoticBall;
var position,database;

function setup(){
    createCanvas(500,500);

    hypnoticBall = createSprite(250,250,10,10);
    hypnoticBall.shapeColor = "red";

    database = firebase.database();
    var ballPosition = database.ref("ball/position");
    ballPosition.on("value",readPosition, showError);
}

function draw(){
    background("white");
    if(position != undefined){
         if(keyDown(LEFT_ARROW)){
            writePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            writePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            writePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            writePosition(0,+1);
        }
}
    drawSprites();
}

/*function changePosition(x,y){
    hypnoticBall.x = hypnoticBall.x + x;
    hypnoticBall.y = hypnoticBall.y + y;
}*/
function readPosition(data){
    position = data.val();
    hypnoticBall.x = position.x;
    hypnoticBall.y = position.y;
}
function writePosition(x,y){
    database.ref('ball/position').set({
        'x': position.x + x,
        'y' : position.y + y,
    });
}
function showError(error){
    console.log("some error occured");
    console.log(error);
    
}
