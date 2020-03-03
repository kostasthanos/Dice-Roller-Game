var scores, roundScore, activePlayer;

// Variable showing that game is on
var gameOn;

gameOn = true;

// Winning Score
var myScore;

// Calling the initialization of variables and styles
init();

function validInput(){
    if (document.getElementById("win-score").value===""){
        myScore = 100;
        document.getElementById("wscore").innerHTML = myScore; 
    }
}

// When user hits the Roll Dice Button
document.querySelector('.btn-roll').addEventListener('click', function(){
    document.querySelector('.btn-roll').style.opacity = 1;
    document.querySelector('.btn-hold').style.opacity = 1;
    
    if (gameOn){
        // Random number for both dices in range 1 to 6
        var diceOne = Math.floor(Math.random()*6) + 1;
        var diceTwo = Math.floor(Math.random()*6) + 1;
        
        // First dice display when rolling
        var diceOneDom = document.querySelector('.first-dice');
        diceOneDom.style.display = 'block';
        diceOneDom.src = 'css/img/dice-' + diceOne + '.png';
        
        // Second dice display when rolling
        var diceTwoDom = document.querySelector('.second-dice');
        diceTwoDom.style.display = 'block';
        diceTwoDom.src = 'css/img/dice-' + diceTwo + '.png';
        
        if (diceOne===1 && diceTwo===1){
            // Change active player
            nextPlayer();
        }else if (diceOne===6 && diceTwo===6){
            nextPlayer();
        }else{
            roundScore += (diceOne + diceTwo);
            document.getElementById('current-'+activePlayer).textContent = roundScore;
        }
    }
});

// When user hits the Hold Button
document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gameOn){
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        // Check winning condition
        if (scores[activePlayer] >= myScore){
            document.getElementById('name-' + activePlayer).textContent = 'WINNER !';
            
            document.querySelector('.first-dice').style.display = 'none';
            document.querySelector('.second-dice').style.display = 'none';
            
            document.querySelector('.first-dice').style.display = 'none';
            document.querySelector('.second-dice').style.display = 'none';
            
            document.querySelector('.player-'+activePlayer+'-box').classList.add('fireworks');
            document.querySelector('.player-'+activePlayer+'-box').classList.remove('active');
            
            gameOn = false;
        }else{
            nextPlayer();
        }
    }
});

// When user hits the New Game Button
document.querySelector('.btn-new').addEventListener('click', function(){
    init();
    document.querySelector('.btn-roll').style.opacity = '1';
    document.querySelector('.btn-hold').style.opacity = '1';
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer=1 : activePlayer=0;
    roundScore = 0;
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    // Change the active class 
    document.querySelector('.player-0-box').classList.toggle('active');
    document.querySelector('.player-1-box').classList.toggle('active');
}


// User can change the names of active Players
document.querySelector('.name-0-changer').addEventListener('click', function(){
   document.querySelector('#name-0').textContent = prompt('Player 1 : ') ;
});

document.querySelector('.name-1-changer').addEventListener('click', function(){
   document.querySelector('#name-1').textContent = prompt('Player 2 : ') ;
});


// Function for opening and closing the Instructions window
function openTable(){
    document.getElementById('instructions').style.display = 'block';
    document.querySelector('.container').classList.add('blur-filter'); 
    document.querySelector('.mytitle').classList.add('blur-filter');
    document.querySelector('.prefer').classList.add('blur-filter');
    document.querySelector('#win-score').classList.add('blur-filter');
    document.querySelector('.btn-set-score').classList.add('blur-filter');  
}

function closeTable(){
    document.getElementById('instructions').style.display = 'none';
    document.querySelector('.container').classList.remove('blur-filter');
    document.querySelector('.mytitle').classList.remove('blur-filter');
    document.querySelector('.prefer').classList.remove('blur-filter');
    document.querySelector('#win-score').classList.remove('blur-filter');
    document.querySelector('.btn-set-score').classList.remove('blur-filter');
}


// Function for user to set the winning score
function winnerScore(){
    document.querySelector('.btn-set-score').style.display = 'block';
    document.querySelector('.winning-score').style.display = 'block';
}

function aboutScore(){
    myScore = document.getElementById("win-score").value;
    document.getElementById("wscore").innerHTML = myScore; 
    document.querySelector('.btn-set-score').style.display = 'none';
    document.querySelector('.winning-score').style.display = 'none';
}

// Initialization function
function init(){
    activePlayer = 0;
    scores = [0, 0];
    roundScore = 0;
    myScore = 0;
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('.first-dice').style.display = 'none';
    document.querySelector('.second-dice').style.display = 'none';
    
    document.getElementById('instructions').style.display = 'none';
    
    document.querySelector('.btn-roll').style.opacity = 0.7;
    document.querySelector('.btn-hold').style.opacity = 0.7;
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('.btn-set-score').style.display = 'none';
    document.querySelector('.winning-score').style.display = 'none';
}
