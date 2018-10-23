// var obj = {
//     name: "Gabriel",
// };
// var stringObject = JSON.stringify(obj);
// console.log(typeof stringObject);
// console.log(stringObject);

// var personString = '{"name": "Gabriel", "age": 20}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body',
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);