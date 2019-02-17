//Have computer guess a random letter
//Have user guess a letter via keyboard, give them 9 guesses
//Display which letter guesses they have already made, and let them know how many guess they have left
//If they guess the same letter as the computer they win a point, and the game resets
//If they don't sucessfully get the right letter in 9 chances, they lose the game, earn a 'losses' point, and the game resets


var wins = 0;
var losses = 0;
var numGuesses = 9;


var computerChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

        
var resetGuesses = function () {
    numGuesses = 9;
    document.querySelector("#guesses").innerHTML = '';
}

document.onkeyup = function () {


  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; 
  var userGuess = event.key;
  var userChoices = userGuess;

        if (userGuess === computerChoices[Math.floor(Math.random() * computerChoices.length)])
            wins++;
        {
          
        if (userGuess === computerGuess) {
            wins++;
            resetGuesses();
        }    

        else if (numGuesses == 0) {
            losses++;
            resetGuesses();
          }
        else if (userGuess.length < 0) {
          }
        else {
            numGuesses--;
          }



        var points =
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p># of Guesses left: " + numGuesses + "</p>" ;
        
            document.querySelector("#game").innerHTML = points;
            var userChoices = " " + userChoices;
            document.querySelector("#guesses").innerHTML += userChoices;
        }
    }