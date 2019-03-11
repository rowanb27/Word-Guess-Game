var fastFood = [
    "mcdonalds",
    "subway",
    "burgerking",
    "jimmyjohns"    
]

var randomW = "";
var lettersOfWord = [];
var blankSpace = 0;
var blankCorrect = [];
var wins = 0;
var lettersGuessed = [];
var guessesleft = 13;

randomW = fastFood[Math.floor(Math.random() * 
fastFood.length)];
console.log(randomW);

lettersOfWord = randomW.split("");
console.log('letters of word', lettersOfWord);

blankSpace = lettersOfWord.length;
console.log('blankSpace', blankSpace);

for (var i = 0; i < blankSpace; i++) {
blankCorrect.push("_");
}
console.log("blankCorrect", blankCorrect);

var mcd;
var sub;
var bur;
var jim;

mcd = document.getElementById("mcd");
sub = document.getElementById("sub");
bur = document.getElementById("bur");
jim = document.getElementById("jim");

//Start of game
document.onkeyup = function(event) {
   document.getElementById("currentword").innerHTML = "" + blankCorrect.join(" ");

   console.log(randomW);
   console.log(lettersOfWord);
   console.log(blankSpace);
   console.log(blankCorrect);

   var guessed = String.fromCharCode(event.keyCode).toLocaleLowerCase();
      checkLetters(guessed);

   complete(); 

   console.log(guessed);

   document.getElementById("playerguesses").innerHTML = 
   " " + lettersGuessed.join(" ");

}

function reset() {
    guessesleft = 13;
    lettersGuessed = [];
    blankCorrect = [];
    //Game() // ???
}

function checkLetters(letter) {
    var letterInWord = false;
    console.log('blankSpace', blankSpace);
    for (var i = 0; i < blankSpace; i++) {
        if (randomW[i] == letter) {
            letterInWord = true;
        }
    }

  if (letterInWord) {
      for (var i = 0; i < blankSpace; i++) {
          console.log('inide letter check')
          console.log(letter);
          console.log(randomW[i]);
          if (randomW[i] == letter) {
              blankCorrect[i] = letter;
          }
      }
  }  else {
      lettersGuessed.push(letter);
      guessesleft--;
  }

  console.log(blankCorrect);
}

function complete() {
    console.log("wins:" + wins + "| letters-guessed:" + lettersGuessed + "| guesses-left:" + guessesleft);

    if (lettersOfWord.toString() == blankCorrect.toString()) {
        wins++;
        aud()
        reset()

        document.getElementById("winstracker").innerHTML = " " + wins;

    } else if (guessesleft === 0) {
        lettersGuessed++;
        reset() 
        document.getElementById("lettersguessed").innerHTML
        = " " + lettersGuessed;
        
    }
    document.getElementById("currentword").innerHTML
    = " " + blankCorrect.join(" ");

}



function aud() {
    var ost = document.getElementById(randomW + "_ost")
    ost.play();
}
