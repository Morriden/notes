const mongoose = require('mongoose');
const Input = require('./Input');
const Notes = require('./lib/Note');

mongoose.connect('mongodb://localhost:27017/notes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const input = new Input(process.argv);
const isValidInput = input.isValid();

isValidInput ? Notes.execute(input) : console.log('failure to start');
