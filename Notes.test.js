const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const Note = require('./lib/Notes');

const mongodb = new MongoMemoryServer();

describe('Note model', () => {
    beforeAll(() => {
        return mongodb.getUri()
            .then(uri => mongoose.connect(uri, {
                useUnifiedTopology: true,
                useNewUrlParser: true
            }));
    });

    beforeEach(() => {
        return mongoose.connection.dropDatabase();
    });

    afterAll(() => {
        return mongoose.connection.close()
            .then(() => mongodb.stop());
    });

    it('can build a note with add', () => {
        return Note.execute({
            type: 'add',
            payload: 'some text'
        })
            .then(note => {
                expect(note.toJSON()).toEqual({
                    _id: expect.anything(),
                    text: 'some text',
                    __v: 0
                });
            });
    });

    it('can list all of the notes', async() => {
        
        await Note.execute({
            type: 'add',
            payload: 'This is the list test'
        });

        await Note.execute({
            type: 'add',
            payload: 'this is the test number 2'
        });

        return Note.execute({
            type: 'list'
        })
            .then(notes => {
                expect(notes.map(note => note.toJSON())).toEqual([
                    {
                        _id: expect.anything(),
                        text: 'This is the list test',
                        __v: 0
                    },
                    {
                        _id: expect.anything(),
                        text: 'this is the test number 2',
                        __v: 0
                    }
                ]);

            });
    });

    it('can delete a note from our list', async() => {
        const addNote1 = {
            type: 'add',
            payload: 'This is the list test 1'
        };

        const addNote2 = {
            type: 'add',
            payload: 'this is the list test 2'
        };
        
        const note = await Note.execute(addNote1);

        await Note.execute(addNote2);
        
        const deleteNote = {
            type: 'delete',
            payload: note._id
        }; 
        
        await Note.execute(deleteNote);

        return Note.execute({ type: 'list' })
            .then(notes => {
                expect(notes.map(note => note.toJSON())).toEqual([{
                    _id: expect.anything(),
                    text: 'this is the list test 2',
                    __v: 0
                }]);
            });
    });
});
