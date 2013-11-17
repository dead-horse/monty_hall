/*!
 * monty_hall - monty_hall.js 
 * Author: dead-horse <dead_horse@qq.com>
 */
function random() {
  return Math.random() - 0.5;
}

function shuffle(arr) {
  for (var i = 0; i < 5; i++) {
    arr.sort(random);
  }
  return arr;
}

var lefts = {
  0: [1, 2],
  1: [0, 2],
  2: [0, 1]
}

var getCar = 0;

function montyHall() {
  var doors = shuffle(['sheep', 'sheep', 'car']);
  var choosed = Math.floor(Math.random() * 3);
  var leftNum = lefts[choosed];
  var left;
  for (var i = 0; i < 2; i++) {
    if (doors[leftNum[i]] === 'sheep') {
      left = leftNum[1 - i];
      break;
    }
  }
  if (doors[choosed] === 'car') {
    getCar++;
  }
}
var times = 100000;
for (var i = 0; i < times; i++) {
  montyHall();
}

console.log('Do not switch get the car: %s / %s.', getCar, times);
