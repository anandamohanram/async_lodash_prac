console.log('Program Start');

var async = require('async');
async.auto({
    one: function (callback) {
        setTimeout(function () {
            console.log('First Step ');
            callback(null, '1');
        }, 3000);
    },
    two: [
        'one', function (arg1, callback) {
            console.log(arg1);
            console.log('Second Step --> ' + JSON.stringify(arg1));
            callback(null, '2');
        }
    ],
    three: [
        function (callback) {
            setTimeout(function () {
            console.log('thrid Step');
            callback(null, '3');
            },4000);
        }
    ]
},
    function (err, result) {
        if (err)
            console.log("err => " + err);
        else
            console.log(result);
    });

console.log('Program End');