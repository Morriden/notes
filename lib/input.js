// const isValid = array => {
//     if (array[0] === '--add' || array[0] === '-a' && (!array[1] === '')) {
//         return true;
//     } else {
//         return false;
//     }
// };

const minimist = require('minimist');

const isValid = obj => {
    if (Object.keys(obj.includes('-a' || '--add'))) {
        return true;
    } else {
        return false;
    }
};

const parse = array => {

    const obj = minimist(array);
    delete obj._;

    const [[type, payload]] = Object.entries(obj);
    return {
        type,
        payload
    };
};

module.exports = {
    isValid,
    parse
};