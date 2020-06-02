const { parse, isValid } = require('./lib/input');
const { execute } = require('./lib/notes');

//bring execute, valid, and parse functions together.
// use parse to create and object from process.argv.
//use valid to check if it is a valid action.
//if valid execute
//IF NOT VALID show error.



let parsed = parse(process.argv);

isValid(parsed) ? execute(parsed) : console.log('failure to start');

