const Notes = require('./lib/Notes');

describe('Notes class', () => {
    it('executes and adds note returning statement', () => {
        const note = {
            type: 'add',
            payload: 'my text'
        };

        const result = Notes.execute(note);

        expect(result).toEqual({
            id: expect.any(Number),
            text: 'my text'
        });
    });
});