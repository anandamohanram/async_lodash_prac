const async = require('async');
var request = require('request');
const _ = require('lodash')


const urls = [
    'https://www.w3.org/TR/PNG/iso_8859-1.txt',
    'http://txt2html.sourceforge.net/sample.txt2'
]

async.each(urls, (url, callback) => {
    console.log("Receiving data from " + url);
    request.get(url, (err, res, body) => {
        //console.log(_.keys(res));
        console.log(body.substring(0, 100));
        console.log(res.statusCode + " " + res.statusMessage);
        console.log("\n \n");
        if (res.statusCode === 404)
            callback("File not found")
        else
            callback(err);
    });
}, function (err, content) {
    console.log("Final callback");
    if (err) {
        console.log("Error receiving data - " + err);
    } else {
        console.log("Data received successfully..!");
    }
}
);