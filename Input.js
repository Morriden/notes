const minimist = require('minimist');

const parse = array => {
    const obj = minimist(array);
    delete obj._;

    let [[type, payload]] = Object.entries(obj);
    if (type === 'a') {
        type === 'add';
    } return {
        type,
        payload
    };
};

class Input {
    constructor(array) {
        const { type, payload } = parse(array);
        this.type = type;
        this.payload = payload;
    }
    isValid() {
        return this.type === 'add' && this.payload;
    }
}
module.exports = Input;
