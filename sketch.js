var database;
var playerCount ;
var allPlayers;
var gameState = 0;
var form, game, player;
var car1, car2, car3, car4;
var car1_img, car2_img, car3_img, car4_img;
var track_img;
var cars;

function preload(){
    car1_img = loadImage("/images/car1.png");
    car2_img = loadImage("/images/car2.png");
    car3_img = loadImage("/images/car3.png");
    car4_img = loadImage("/images/car4.png");

    track_img = loadImage("/images/track.jpg");

    bg_img = loadImage("/images/ground.png");
}

function setup(){
    createCanvas(displayWidth - 200,displayHeight - 250);

    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    //background("white");

    image(bg_img, 0, -displayHeight/14, displayWidth - 200,displayHeight - 180)

    if(playerCount === 4){
        game.update(1);
    }

    if(gameState === 1){
        clear();
        game.play();
    }

}