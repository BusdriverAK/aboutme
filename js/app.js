'use strict';

var correctAns = 0;

confirm('Are you ready to play the guessing game?');
//questions to ask for the code

// prompt user for name
var pName = prompt('Firstly, what is your name?');
console.log(pName);
if (pName !== null){
  alert('Let\'s get this quiz started, ' +pName);
}

// 1. guess my age
function funAge(){
  var myAge = 28;
  var guessAge = prompt('How old am I? Hint: 20-35');
  console.log(guessAge);
  var intAge = parseInt(guessAge);

  if(intAge === myAge){
    alert('Spot on! I\'m 28.');
    correctAns++;
  } else if(intAge > myAge){
    alert('Not yet, I\'m 28');
  } else{
    alert('Those days have passed, I\'m 28.');
  }
}
funAge();
// 2. do i like snowboarding more than skiing y/n
function funSki(){
  var downhillRec = prompt('Do I like snowboarding more than skiing? Yes or No?').toLowerCase();
  console.log(downhillRec);
  if(downhillRec === 'no'){
    alert('You\'re correct! I enjoy both, but prefer skiing!');
    correctAns++;
  } else if(downhillRec === 'yes'){
    alert('While I enjoy both, I prefer skiing over snowboarding.');
  } else{
    alert('Yes or no would have been better answers.');
  }
}
funSki();


// 3. is celery the one food i hate y/n
function funCelery(){
  var ewwCelery = prompt('Is celery the worst food on the planet? Yes or No').toLowerCase();
  console.log(ewwCelery);
  if(ewwCelery === 'yes'){
    alert('I wholeheartedly agree. And you are correct!');
    correctAns++;
  } else if(ewwCelery === 'no'){
    alert('That\'s just like, your opinion, man.');
  } else{
    alert('Yes or no are still the best answers here.');
  }
}
funCelery();

// 4. Have i visited more than 10 countries y/n
function funVisit(){
  var visitNum = prompt('Have I visited more than 10 countries? Yes or No only.').toLowerCase();
  console.log(visitNum);
  if(visitNum === 'yes'){
    alert('Correct! I can show you the world, Shining, shimmering splendid!');
    correctAns++;
  } else if (visitNum === 'no'){
    alert('Incorrect! I\'ve been There and Back Again');
  } else{
    alert('I really thought 3rd time would be the charm. Yes or no would suffice');
  }
}
funVisit();

// 5. am i from seattle y/n
function funSeattle(){
  var fromSeattle = prompt('Am I from Seattle? Yes or no.').toLowerCase();
  console.log(fromSeattle);
  if(fromSeattle === 'no'){
    alert('That\'s Right! Born and raised in Alaska');
    correctAns++;
  } else if(fromSeattle === 'yes'){
    alert('Not quite. Grew up further north in Alaska.');
  } else{
    alert('One more question to try yes or no.');
  }
}
funSeattle();

// 6. have i seen over 100 musical artists perform in a single year?
function funConcert(){
  var concertCount = prompt('Have I seen over 100 musical artists perform in a single year? Yes or No?').toLowerCase();
  console.log(concertCount);
  if(concertCount === 'yes'){
    alert('You guessed it! What a year it was!');
    correctAns++;
  } else if(concertCount === 'no'){
    alert('Sorry, you guessed incorrectly.');
  } else{
    alert('Hint: hit F5 or Ctrl + R');
  }
}
funConcert();

// 7. can you guess any of my favorite video games I currently play (array)
function funGame(){

  var favGames = ['dota', 'pubg', 'ssbm', 'rocket league', 'sot' , 'sea of thieves'];
  var anIndex = -1;
  var tryCount = 0;

  do{
    var ansGame = prompt('Can you guess any of my current favorite video games in 5 tries or less? TIP: Use acronyms.').toLowerCase();
    for (var i=0; i < favGames.length; i++){
      if(favGames[i]===ansGame){
        anIndex = i;
        break;
      }
    }
    if(anIndex>-1){
      alert('One of my favorites!');
      correctAns++;
    } else{
      alert('Try again.');
      tryCount++;
    }
  }
  while(anIndex===-1 && tryCount <= 4);
}
funGame();
alert('Quiz finished, ' +pName+ '. You got ' +correctAns+ ' out of 7 questions correct!');