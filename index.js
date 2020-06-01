const { parse, isValid } = require('./lib/input');
const { execute } = require('./lib/notes');
const minimist = require('minimist');

console.log(minimist(process.argv.slice(2)));

//bring execute, valid, and parse functions together.
// use parse to create and object from process.argv.
//use valid to check if it is a valid action.
//if valid execute
//IF NOT VALID show error.



let parsed = parse(process.argv) ;

if (isValid(parsed) === true) {
    execute();
} else {
    console.log('failure to start');
}

