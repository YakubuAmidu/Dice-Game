
        /*
        if(dice === 6 && lastDice === 6){
            //Player looses score
            scores[activePlayer] = 0;
            document.querySelector('#score' + activePlayer).textContent = '0';
            nextPlayer();
        } else if (dice !== 1){
        //Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // Next player
        nextplayer();
    }
        lastDice = dice;
        */
    }
});


document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){

             //Add current score to global score
    scores[activePlayer] += roundScore;

    // update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        var input = docoument.quereySelector('.final-score').value;
        var winningScore;

        //undefined, 0, null, or "" are COERCED to false;
        //Anything else are CORECED to true;
        if(input){
            var winningScore = input;
        } else {
            winningScore = 100;
        }

    // check if the player won the game
     if(scores[activePlayer] >= winningScore){
         document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
         document.getElementById('dice-1').style.display = 'none';
         document.getElementById('dice-2').style.display = 'none';
         document.querySelector('.player-' + activePlayer + '-panel').classList.add('Winner');
         document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
         gamePlaying = false;
     } else {
         // Next player
    nextPlayer();
     }
    }
});

function nextPlayer(){
    // Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

document.getElementById('dice-1').style.display = 'none';
document.getElementById('dice-2').style.display = 'none';


document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'player 1';
document.getElementById('name-1').textContent = 'player 2';
document.querySelector('.player-0-panel').classList.remove('Winer');
document.querySelector('.player-1-panel').classList.remove('Winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

}
