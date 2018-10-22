console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

// var user = os.userInfo();

var res = notes.addNote();
console.log(res);

// option 1
// fs.appendFileSync('greetings.txt', 'Hello world!');

// option 2 
// fs.appendFile('greetings.txt',  `Hello ${user.username}! You are ${notes.age}.`, function(err){
// 	if (err) {
// 		console.log('Unable to write to file');
// 	}
// });