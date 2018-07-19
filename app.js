// //broken
var times = [
  ['04/11/10', '86kg'],
  ['05/12/11', '90kg'],
  ['06/12/11', '89kg']
];

var outerLoopArr = [];
var newTimes = [];
for (var i = 0; i < times.length; i++) {
//console.log[i]; will return nothing because why? because it's an iterator value and those can't be console.logged?
var newTimes = [];
  for(var x = 0; x < times[i].length; x++) {
    newTimes.push(times[i][x]);
    // console.log(newTimes[i][x]);  
  }
}
console.log(newTimes);


// fixed
// var newTimes = [];
// for (var i = 0; i < times.length; i++) {
//   for(var x = 0; x < times[i].length; x++) {
//     newTimes.push(times[i][x]);
//   }
// }
// console.log(newTimes);
// results of console.log newTimes
// 6) ["04/11/10", "86kg", "05/12/11", "90kg", "06/12/11", "89kg"]
// 0
// :
// "04/11/10"
// 1
// :
// "86kg"
// 2
// :
// "05/12/11"
// 3
// :
// "90kg"
// 4
// :
// "06/12/11"
// 5
// :
// "89kg"

