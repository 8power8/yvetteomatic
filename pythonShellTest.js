var PythonShell = require('python-shell');
 
/*var options = {
  args: ['/home/pi/yvetteroulette/img/sudoku.png']
};*/

var options = {
  args: ['A', 'B', 'C']
};

PythonShell.run('printer01.py', options, function (err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution 
  console.log('results: %j', results);
});
