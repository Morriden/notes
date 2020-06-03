const Input = require('./Input');
const Notes = require('./lib/Notes');

let input = new Input(process.argv);
const isValidInput = input.isValid();

isValidInput ? Notes.execute(input) : console.log('failure to start');