var times = [
  ['04/11/10', '86kg'],
  ['05/12/11', '90kg'],
  ['06/12/11', '89kg']
];
var x = 1;
console.log(x);

console.log(times); 

var newTimes = [];
for (var i = 0; i < times.length; i++) {
  for(var x = 0; x < times[i].length; x++) {
    newTimes.push(times[i][x]);
  }
}
console.log(newTimes);