const Input = require('./Input');

describe('Input class', () => {
    it('parses full object', () => {
        const input = new Input([
            'C:\\Program Files\\nodejs\\node.exe',
            'C:\\Users\\Erik\\myproject\\careertrack\\notes\\index.js',
            '--add',
            'hello'
        ]);
        expect(input.type).toEqual('add');
        expect(input.payload).toEqual('hello');
    });

    it('validates', () => {
        const input = new Input([
            'C:\\Program Files\\nodejs\\node.exe',
            'C:\\Users\\Erik\\myproject\\careertrack\\notes\\index.js',
            '--add',
            'hello'
        ]);
        const result = input.isValid();

        expect(result).toBeTruthy();
    });
});
