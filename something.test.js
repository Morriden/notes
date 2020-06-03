

it('can build a note', () => {
    return Notes.execute('note');
        .then(house => {
            expect(house).toEqual({
                _id: expect.anything(),
                text: 'some text'
            })
        })
})