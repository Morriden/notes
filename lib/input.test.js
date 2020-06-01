const { isValid, parse } = require('./input');


describe('validate the commands correct', () => {
    it('validates', () => {
        const trueObject = { '--add': 'sometext' };
        const falseObject = { '--dad': 'sometext' };
        const trueObject2 = { '-a': 'sometext' };
        
        const resultTrue = isValid(trueObject);
        const resultFalse = isValid(falseObject);
        const resultTrue2 = isValid(trueObject2);

        expect(resultTrue).toEqual(true);
        expect(resultFalse).toEqual(false);
        expect(resultTrue2).toEqual(true);
    });
});

describe('parses the commandline into an object', () => {
    it('parses array into object?', () => {
        const array = ['--add', 'My Note'];
        
        const result = parse(array);

        expect(result).toEqual({
            type: '--add',
            payload: 'My Note'
        });
    });
});