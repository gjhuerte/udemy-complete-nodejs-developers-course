console.log('Starting app.');

const fs = require('fs');
const os = require('os');

var user = os.userInfo();

// option 1
// fs.appendFileSync('greetings.txt', 'Hello world!');

// option 2 
fs.appendFile('greetings.txt',  `Hello ${user.username}!`, function(err){
	if (err) {
		console.log('Unable to write to file');
	}
});