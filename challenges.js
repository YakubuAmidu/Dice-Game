/*
YOUR 3 CHALLENGES
Change the game to follow this rules:

1. A player looses his entire score when he rolls two 6 in a row, after that its the next players turn.
(HINT: Always save the previous dice roll in a separate variable).
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (HINT: You can read that value with the .value in javaScript. This is a good opportunity use google to figure this out:).
3. Add another another dice to the game, so that there are two dice now. The player looses his current score when one them is 1. (HINT: You will need css to position the second dice, so take a look at css code for the first one.)
*/


var scores, roundScore, activePlayer, nextPlayer, gamePlaying;

init();

var lastDice;

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        //Random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';


    // 3. Update the round score if the rolled number is Not 1

         if (dice1 !== 1 && dice2 !== 1){
        //Add score
        roundScore += dice1 + dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // Next player
        nextplayer();
    }

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
