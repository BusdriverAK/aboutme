'use strict';

confirm('Are you ready to play the guessing game?');
//questions to ask for the code
// 1. How old am I
/* run loop until user get's correct age. 3 outcomes correct, under, and over */
var myAge = 28;
var guessAge = prompt('How old am I? Hint: 20-35');
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
  if(downhillRec === 'no'){
    alert('You\'re correct! I enjoy both, but prefer skiing!');
  } else if(downhillRec === 'yes'){
    alert('While I enjoy both, I prefer skiing over snowboarding.');
  } else{
    alert('Yes or no would have been better answers.');
  }


// 3. is celery the one food i hate y/n
var ewwCelery = prompt('Is celery the worst food on the planet? Yes or No').toLowerCase();
  if(ewwCelery === 'yes'){
    alert('I wholeheartedly agree. And you are correct!');
  } else if(ewwCelery === 'no'){
    alert('That\'s just like, your opinion, man.');
  } else{
    alert('Yes or no are still the best answers here.');
  }
  
// 4. Have i visited more than 10 countries y/n
// 5. am i from seattle y/n
// 6. Do you like celery? y/n