const minimist = require('minimist');

console.log(minimist(process.argv.slice(2)));

//valid functions. If there is an --add (return true)

//if its true we do a parse.

//bring execute, valid, and parse functions together.
// use parse to create and object from process.argv.
//use valid to check if it is a valid action.
//if valid execute
//IF NOT VALID show error.