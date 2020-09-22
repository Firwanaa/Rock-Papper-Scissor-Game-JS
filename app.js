//Using Dom & Query Selectors to Get HTML Elements & Assign it To Var
var reset = document.getElementById("reset1");
var light = document.getElementById("light");
var dark = document.getElementById("dark");
var options = document.querySelectorAll('.opt');
var showResult = document.getElementById("showResult");
var result = document.getElementById("result");
var point = document.getElementById('point');
var note = document.getElementById('note');
document.body.style.background = 'black';
// Counter Variables
var countYou = 0;
var countMe = 0;
 //Listner for Reset Botton To Invoke Restart Function
 reset.addEventListener('click', restartGame); 

//Play Game Function
function gameOn(x){
    //Show Reset Bottom & A Note After Game Strart
    reset.style.display = 'inline-block';
    note.style.display = 'block';
    //Take User Choice
    var playerOpt = x.target.id;
    //Assign Generator Function to A Var
    var generator = generatOpt();
    //Assign Winner Function to A Var
    var winner = whoIsTheWinner(generator, playerOpt);
    //Invoked to Show Results and Increment Counters
    showTheWinner(winner, generator);
    //Testing ShowTheWinner Function 
    console.log(countYou,countMe);
    //Testing generatOpt Function 
    console.log(generatOpt());
    //Testing whoIsTheWinner Function 
    console.log(whoIsTheWinner(generator, playerOpt));
}
 //Lisnter for User Click To Invoke Game Function  
 options.forEach(opt => opt.addEventListener('click', gameOn));

//Generate Randome Number "Options" Between 1-3
function generatOpt (){
    var randomOpt = Math.ceil(Math.random()*(3-0)+0);
    if (randomOpt == 3){
        return 'rock';
    }else if (randomOpt == 2){
        return 'paper';
    }else{
        return 'scissors';
    } 
}

//Choose the Winner
function whoIsTheWinner(a, b) {
    if(a === b){
        return 'draw';
    }else if(a === 'rock'){
        if(b === 'paper'){
            return 'you';
        }else {
            return 'me';
        }
    }else if (a === 'paper'){
        if(b === 'scissors'){
            return  'you';
        }else {
            return 'me';
        }
    }else if(a === 'scissors'){
       if(b === 'rock'){
            return 'you';
        }else {
            return 'me';
        }
    }
  }

  //Show Results and Increment the Winner Counter
  function showTheWinner(winner, generator){
    if(winner === 'you'){
        countYou++;
        result.innerHTML = `
        <h1 class="win">We Got A Winner ! :)</h1>
        <i id="ssr" class="hand ${generator} icon huge"></i>
        `;
 
    }else if (winner === 'me'){
        countMe++;
        result.innerHTML = `
        <h1 class="lose">You Lose ! :(</h1>
        <i id="ssr" class="hand ${generator} icon huge"></i>  
        `;
    }else{
        result.innerHTML = `
        <h1 class="draw">A Draw! ^_^</h1>
        <i id="ssr" class="hand ${generator} icon huge"></i>  
        `;
   
    }
    point.innerHTML = `
   <p>You: ${countYou}</p>
   <p>Me : ${countMe}</p>
   `;
    showResult.style.display = 'block';
  }
   
//Reset The Game
function restartGame() {
   countYou = 0;
    countMe = 0;
    point.innerHTML = `
   <p>You: ${countYou}</p>
   <p>Me : ${countMe}</p>
   `;
   showResult.style.display = 'none';
  }
  //Change Bakground to Light
  function ChangeToLight(){
    document.body.style.background = 'white';
  }
  //Change Bakground to Dark
  function ChangeToDark(){
    document.body.style.background = 'black';
    
  }
  light.addEventListener('click', ChangeToLight); 
  dark.addEventListener('click', ChangeToDark); 





