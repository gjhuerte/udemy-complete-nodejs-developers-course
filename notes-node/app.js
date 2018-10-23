console.log('Starting app.');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
// var command = process.argv[2];
var command = argv._[0];
console.log('Command: ', command);
// console.log('Process: ', process.argv);
// console.log('Yargs: ', argv);

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);

    if(note) {
        console.log('Note created');
        console.log('--');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else {
        console.log('Note title taken');
    }
} else if (command === 'list') {

    for(note in JSON.parse(notes.getAll())) {
        console.log('--');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    }
} else if (command === 'read') {
    notes.getNote(argv.title);
}  else if (command === 'remove') {
    var isRemoved = notes.removeNote(argv.title);
    var message = isRemoved ? "Note was removed" : "Note not found";
    console.log(message)
}  else {
    console.log('Command not recognized');
}