class Game{
  constructor(){

  }
getState(){
    var gameStateRef=database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState=data.val();

    })    
}

update(state){
    database.ref('/').update({
        gameState:state
    });
    
}
async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
   
    fighter1 = createSprite (200,500,30,30);
    fighter1.addAnimation('fighter1',fighter1Img);
    fighter1.scale = 4;
    
    fighter2 = createSprite (670,500,50,50);
    fighter2.addImage('fighter2',fighter2Img);
    fighter2.scale = 5.3;
    

     fighter = [fighter1,fighter2];

}
play(){
    form.hide();
    Player.getPlayerInfo();
       
    background(backgroundImg);
   // fighter1 = createSprite(200,580,20,20);
   // fighter1.addAnimation('fighter1',fighter1Img);
   // fighter1.scale = 2.5   

   



    if(allPlayers !== undefined){
      //background(rgb(198,135,103));
      //image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      var index = 0;

      //x and y position of the cars
     var x = 100 ;
     var y = 100;
      //var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;
        x = 500 - allPlayers[plr].distance;
        y = 600;

        fighter[index-1].position.x=x;
        fighter[index-1].position.y=y;
        
        if (index === player.index){
          if (keyDown('p')){
            fighter1.addAnimation('fighter1',fighter1PunchImg);
            player.distance+=10;
            player.update();
          }
        
            if (keyDown('k')){
              fighter[index-1].addAnimation('fighter1',fighter1KickImg);
              
            }
        
           // if (keyDown('l')){
           //   fighter2.addAnimation('fighter2',fighter2PunchImg);
           //   
           // }
        }
      
        
        
    
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
     

    }

    drawSprites();
  }

}