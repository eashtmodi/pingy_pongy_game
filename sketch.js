var target_img, ball_img, paddle_img;
 var ball, target, paddle;
 var topEdge;
 var bottomEdge;
 var rightEdge;
 var leftEdge;
 var score = 0;
 var gameState="start";

 function preload() {
   target_img = loadImage("target.png");
   ball_img = loadImage("ball.png");
   paddle_img = loadImage("paddle.png");

 }

 function setup() {
   createCanvas(500, 800);
   edges = createEdgeSprites();

   ball = createSprite(250, 680, 50, 50);
   ball.addImage("ball", ball_img);
   ball.scale = 1.5;

   paddle = createSprite(250, 720, 50, 50);
   paddle.addImage("paddle", paddle_img);

   target = createSprite(250, 200, 50, 50);
   target.addImage("target", target_img);

   topEdge = createSprite(250, 0, 500, 10);
   bottomEdge = createSprite(250, 800, 500, 10);
   leftEdge = createSprite(0, 400, 10, 800);
   rightEdge = createSprite(500, 400, 10, 800);

   ball.velocityX = -25;
   ball.velocityY = -20; 





 }

 function draw() {
   background(255);
   ball.velocityX < 21;
   ball.velocityY < 21;
   
   if(gameState==="start"){
     ball.visible=true;
     ball.x=250;
       ball.y=680;
     if(keyWentDown("space")){
       gameState="started";
     }
     ball.bounceOff(paddle);
   ball.bounceOff(topEdge);
   ball.bounceOff(bottomEdge);
   ball.bounceOff(rightEdge);
   ball.bounceOff(leftEdge);
   ball.bounceOff(target);
      
     score=0;
     drawSprites();
     textSize(40);
     text("PRESS SPACE TO START",10,400);
   }

   if (ball.isTouching(target)) {
     score = score + 1;
   }
    
   if(gameState==="started"){
   
   
   if (ball.isTouching(bottomEdge)) {
    gameState="end";
   }

    

   if (keyWentDown(LEFT_ARROW)) {
     paddle.velocityX = -10
   }
   if (keyWentUp(LEFT_ARROW)) {
     paddle.velocityX = 0
   }


   if (keyWentDown(RIGHT_ARROW)) {
     paddle.velocityX = 10
   }
   if (keyWentUp(RIGHT_ARROW)) {
     paddle.velocityX = 0
   }
     
     ball.bounceOff(paddle);
   ball.bounceOff(topEdge); 
   ball.bounceOff(rightEdge);
   ball.bounceOff(leftEdge);
   ball.bounceOff(target);
     
   
   ball.collide(bottomEdge) ;
     
   if(score===20){
    gameState="win";
   }
     
     
   
   }
   
   if(gameState==="end"){
    ball.visible=false;
     textSize(48);
    text("PRESS R",150,500);
     if(keyWentDown("R")){
       gameState="start"
     }
   }
   
   if(gameState==="win"){
     target.visible=false;
     textSize(48);
     text("YOU WON!!!",200,400);
     text("PRESS R",150,500);
      if(keyWentDown("R")){
       gameState="start"
     }
   }

   drawSprites();
   textSize(80);
   text(score, 225, 230);
     

 }