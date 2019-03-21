const _ = require("lodash")
async = require("async");

var fs = require('fs');


const readFile = (callback) => {
    fs.readFile('./input.txt', 'utf-8', callback)
}

const modifyContent = (content, callback) => {
    const newContent = content.replace(/the/g, 'the great');
    callback(null, newContent);
}

const writeFile = (content, callback) => {
    fs.writeFile('./output.txt', content, (err) => callback(err, "done"))
}

async.waterfall([readFile, modifyContent, writeFile], (err, res) => {
    if (err)
        console.log("err => " + err);
    else
        console.log("res => " + res);
});