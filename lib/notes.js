const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
});

noteSchema.statics.execute = function(actionObject) {
    switch (actionObject.type) {
        case 'add': {
            console.log(actionObject.payload, 'Yay');
            return this.create({
                text: actionObject.payload
            });
        }
        case 'list': 
            return this.find();
        case 'delete':
            return this.findByIdAndDelete({
                _id: actionObject.payload
            });
        default:
            console.log('Failure: Incorrect Command');
    }
};

module.exports = mongoose.model('Note', noteSchema);
