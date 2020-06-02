const minimist = require('minimist');

const isValid = obj => {
    return obj.type === 'add' && obj.payload;
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