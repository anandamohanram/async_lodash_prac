var async = require('async');

var array = [1, 2, 3, 4, 5]
async.map(array, (item, callback) => {
    callback(null, item * 2);
}, (err, res) => {
    if (err)
        console.log("err => " + err);
    else
        console.log("res => " + res);
})


var square = function (num, doneCallback) {
    setTimeout(function () {
      console.log('Squaring', num);
      return doneCallback(null, num * num);
    }, 4000 * Math.random());
  };
  
  // Square each number in the array [1, 2, 3, 4]
  async.map([1, 2, 3, 4], square, function (err, results) {
    console.log("Finished!");
    console.log(results);
  });
  
  console.log("This line happens first!");


