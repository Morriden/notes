const { isValid } = require('./input');


describe('validate the commands correct', () => {
    it('validates', () => {
        const trueArray = ['--add', 'My Note']
        const falseArray = ['--dad', 'My Note']
        
        const resultTrue = isValid(trueArray);
        const resultFalse = isValid(falseArray);

        expect(resultTrue).toEqual(true);
        expect(resultFalse).toEqual(false);
    });
});