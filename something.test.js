const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const  = require('./House');

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
            .then(() => mongodb.stop())
    });

it('can build a note', () => {
    return Notes.execute('note')
        .then(house => {
            expect(house).toEqual({
                _id: expect.anything(),
                text: 'some text'
            })
        })
})



})