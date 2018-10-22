console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

// var user = os.userInfo();

console.log(_.isString(true));
console.log(_.isString('Andrew'));

var filteredArray = _.uniq([1,2,3,1,1,2,3,1,3,1])
console.log(filteredArray);

// var res = notes.addNote();   
// console.log(res);

// console.log('Result:', notes.add(7,-2));

// option 1
// fs.appendFileSync('greetings.txt', 'Hello world!');

// option 2 
// fs.appendFile('greetings.txt',  `Hello ${user.username}! You are ${notes.age}.`, function(err){
// 	if (err) {
// 		console.log('Unable to write to file');
// 	}
// });