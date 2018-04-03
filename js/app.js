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
} else('Those days have passed, I\'m 28.');

// 2. do i like snowboarding more than skiing y/n
// 3. is celery the one food i hate y/n
// 4. Have i visited more than 10 countries y/n
// 5. am i from seattle y/n
// 6. Do you like celery? y/n