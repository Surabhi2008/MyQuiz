class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background("Yellow")   
    //write code to show a heading for showing the result of Quiz
    textSize(40)
    text("Your Quiz Results")
    fill("Blue");
    textSize(20);
    text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230);
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
 if( Contestant !== undefined){
      var display_position=130
      for(var plr in allContestants){
        debugger;
        var correctAnswer = "2";
        if (correctAnswer === allContestants[plr].answer)
          fill("Green")
        else
          fill("red");
        

      
      display_position+=20
      textSize(15)
      text( Contestant[plr ].name + ":" +  Contestant[plr].distance,120,display_position)
    }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

  }}
