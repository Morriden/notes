const minimist = require('minimist');

console.log(minimist(process.argv.slice(2)));

//valid functions. If there is an --add (return true)

//if its true we do a parse.