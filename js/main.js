/**
 * Created by Administrator on 2018/4/10.
 */
var can1;
var can2;

var canWidth;
var canHeight;

var ctx1;
var ctx2;

var lastTime;
var deltaTime;

var bgPic = new Image();

var ane;

var fruits;

var mom;
var baby;

var mx;
var my;

var babyTail = [];
var babyEye = [];
var babyBody = [];

var momTail = [];
var momEye = [];
var momBodyOra = [];
var momBodyBlue = [];

var data ;

var  wave;
var halo;

var dust ;
var dustPic = [];

//var restart;

document.body.onload = game;
function game() {
    init();
    lastTime = Date.now();
    deltaTime = 0;
    gameloop();
}

function init() {
    // 获取canvas   getContext
    can1 = document.getElementById('canvas1');//fishes , dust , UI ,circle
    ctx1 = can1.getContext('2d');
    can2 = document.getElementById('canvas2');//background,one ,fruits
    ctx2 = can2.getContext('2d');

    can1.addEventListener('mousemove', onMouseMove, false);
   // can1.addEventListener('onclick', onClick, false);

    bgPic.src = "./src/background.jpg";

    canWidth = can1.width;
    canHeight = can1.height;

    ane = new aneObj();
    ane.init();

    fruits = new fruitObj();
    fruits.init();

    mom = new momObj();
    mom.init();

    baby = new babyObj();
    baby.init();

    data = new dataObj() ;

    my = canHeight * 0.5;
    mx = canWidth * 0.5;




    for (var i = 0; i < 8; i++) {
        babyTail[i] = new Image();
        babyTail[i].src = './src/babyTail' + i + '.png';
    }
    for(var i =0 ; i< 2; i++){
        babyEye[i] = new Image();
        babyEye[i].src = './src/babyEye' + i + '.png';
    }
    for(var i=0 ; i< 20; i++){
        babyBody[i] = new Image();
        babyBody[i].src = './src/babyFade' + i +'.png';
    }

    for (var i = 0; i < 8; i++) {
        momTail[i] = new Image();
        momTail[i].src = './src/bigTail' + i + '.png';
    }

    for(var i =0 ; i< 2; i++){
        momEye[i] = new Image();
        momEye[i].src = './src/bigEye' + i + '.png';
    }

    for (var i = 0; i < 8; i++) {
        momBodyOra[i] = new Image();
        momBodyOra[i].src = './src/bigSwim' + i + '.png';
        momBodyBlue[i] = new Image();
        momBodyBlue[i].src = './src/bigSwimBlue' + i + '.png';
    }

    ctx1.font = "25px Verdana";
    ctx1.textAlign = "center" ;

     wave = new waveObj() ;
     halo = new haloObj() ;

    dust = new dustObj() ;
    dust.init();
    for(var i =0;i<7; i++) {
        dustPic[i] = new Image() ;
        dustPic[i].src = './src/dust'+i+'.png';
    }

   // restart = new restartObj();
   // restart.init();
}
function gameloop() {
    requestAnimationFrame(gameloop);//setInterval,setTimeout,  更科学的方法, FPS 每frame per second
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    if (deltaTime > 40) deltaTime = 40;

    drawBackground();
    ane.draw();
    fruitsMonitor();
    fruits.draw();
    ctx1.clearRect(0, 0, canWidth, canHeight);
    mom.draw();
    baby.draw();
    data.draw();
    momFruitsCollision();
    momBabyCollison();
    wave.draw();
    halo.draw() ;
    dust.draw();
//    restart.draw();
}
function onMouseMove(e) {
    if(!data.gameOver){
        if (e.offsetX || e.layerX) {
            mx = e.offsetX == undefined ? e.layerX : e.offsetX;
            my = e.offsetY == undefined ? e.layerY : e.offsetY;
        }
    }
}
/*
function onClick(e) {
    var x = event.pageX - can1.getBoundingClientRect().left;
    var y = event.pageY - can1.getBoundingClientRect().top;
    ctx2.beginPath();
    ctx2.arc(can1.width*0.5, can1.height*0.5, 20, 0, Math.PI * 2);
    ctx2.closePath();
    if(cxt.isPointInPath(x, y)){
        cxt.fillStyle = "red";
        cxt.fill();
    }
}*/
