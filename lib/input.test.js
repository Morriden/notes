const { isValid, parse } = require('./input');
const { add } = require('./notes');


describe('validate the commands correct', () => {
    it('validates', () => {
        const obj = {
            type: 'add',
            payload: 'A note'
        };

        const result = isValid(obj);
        
        expect(result).toBeTruthy();
    });
});

describe('parses the commandline into an object', () => {
    it('parses array into object?', () => {
        const array = ['node', 'index.js', '--add', 'My Note'];

        const result = parse(array);

        expect(result).toEqual({
            type: 'add',
            payload: 'My Note'
        });
    });
});

describe('create an object representing a note', () => {
    it('creates note', () => {
        const obj = {
            payload: 'my text'
        };
        const note = {
            text: obj.payload
        };

        const result = add(note);

        expect(result).toEqual({
            text: 'my text'
        });

    });
});