'use strict';
/*alert('Let\'s play a little trivia about Ludwin. Can you guess the right answers?');

//question 1
var answer1 = prompt('Does Ludwin likes 80\'s music?. Y or N?');
console.log(answer1);
if (answer1 === 'Y') {
  alert('Very good! Ludwin loves 80\'s music.');
}
else {
  alert('Ludwin loves 80s music. 80s music is super fun.');
}

// question 2
var answer2 = prompt('Does Ludwin likes desserts? Y or N?');
console.log(answer2);

if (answer2 === 'Y') {
  alert('You are right, especially ice cream. ');
}
else {
  alert('Who doesnt like dessert?. Come on!');
}

// question 3
var answer3 = prompt('Does Likes gardening? Y or N?');
console.log(answer3);

if (answer3 === 'Y') {
  alert('Gardening is one if his passions, Ludwin especially enjoys working on his bonsai trees.');
}
else {
  alert('Close! Try some gardening is really awesome.');

}

// question 4
var answer4 = prompt ('Does Ludwin enjoys camping? Y or N?');
console.log(answer4);

if (answer4 === 'Y') {
  alert('Yep he does, camping is really fun');
}
else {
  alert ('He does enjoy camping, especially when there is smores');
}

// question 5
var answer5 = prompt ('Does Ludwin knows how to make a good sourdough?');
console.log (answer5);

if (answer5 === 'Y') {
  alert('Isnt that cool? He has been feeding a year old sourdough starter');
}
else {
  alert('Actually, he is obsessed about sourdough');
}*/
var count = prompt('How old is Ludwin?');
for (var i = 0; i < 3; i++){
  if(count === '37'){
    alert('correct');
    break;
  }else {
    alert ('wrong');
  }
  count = prompt('How old is Ludwin?');
}
