'use strict';

confirm('Are you ready to play the guessing game?');
//questions to ask for the code
// 1. How old am I
/* run loop until user get's correct age. 3 outcomes correct, under, and over */
var myAge = 28;
var guessAge = prompt('How old am I? Hint: 20-35');
console.log(guessAge);
var intAge = parseInt(guessAge);

if(intAge === myAge){
  alert('Spot on! I\'m 28.');
} else if(intAge > myAge){
  alert('Not yet, I\'m 28');
} else{
  alert('Those days have passed, I\'m 28.');
}

// 2. do i like snowboarding more than skiing y/n
var downhillRec = prompt('Do I like snowboarding more than skiing? Yes or No?').toLowerCase();
console.log(downhillRec);
if(downhillRec === 'no'){
  alert('You\'re correct! I enjoy both, but prefer skiing!');
} else if(downhillRec === 'yes'){
  alert('While I enjoy both, I prefer skiing over snowboarding.');
} else{
  alert('Yes or no would have been better answers.');
}


// 3. is celery the one food i hate y/n
var ewwCelery = prompt('Is celery the worst food on the planet? Yes or No').toLowerCase();
console.log(ewwCelery);
if(ewwCelery === 'yes'){
  alert('I wholeheartedly agree. And you are correct!');
} else if(ewwCelery === 'no'){
  alert('That\'s just like, your opinion, man.');
} else{
  alert('Yes or no are still the best answers here.');
}

// 4. Have i visited more than 10 countries y/n
var visitNum = prompt('Have I visited more than 10 countries? Yes or No only.').toLowerCase();
console.log(visitNum);
if(visitNum === 'yes'){
  alert('Correct! I can show you the world, Shining, shimmering splendid!');
} else if (visitNum === 'no'){
  alert('Incorrect! I\'ve been There and Back Again');
} else{
  alert('I really thought 3rd time would be the charm. Yes or no would suffice');
}


// 5. am i from seattle y/n
var fromSeattle = prompt('Am I from Seattle? Yes or no.').toLowerCase();
console.log(fromSeattle);
if(fromSeattle === 'no'){
  alert('That\'s Right! Born and raised in Alaska');
} else if(fromSeattle === 'yes'){
  alert('Not quite. Grew up further north in Alaska.');
} else{
  alert('One more question to try yes or no.');
}

// 6. have i seen over 100 musical artists perform in a single year?
var concertCount = prompt('Have I seen over 100 musical artists perform in a single year? Yes or No?').toLowerCase();
console.log(concertCount);
if(concertCount === 'yes'){
  alert('You guessed it! What a year it was!');
} else if(concertCount === 'no'){
  alert('Sorry, you guessed incorrectly.');
} else{
  alert('Hint: hit F5 or Ctrl + R');
}
