const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
});

noteSchema.statics.execute = function(actionObject) {
    console.log(actionObject, 'action object');
    switch (actionObject.type) {
        case 'add': {
            const text = actionObject.payload;
            return this.create({
                text
            });
        }
        // case 'list': 
        //     return this.find();
        // case 'delete':
        //     return this.findByIdAndDelete();
        default:
            console.log('Failure: Incorrect Command');
    }
};

// class Notes {
//     static execute(actionObject) {
//         switch (actionObject.type) {
//             case 'add':
//                 return Notes.add(actionObject);
//             default:
//                 console.log('Not Appropiate Command');
//         }
//     }
//     static add(actionObject) {
//         let note = {
//             id: Date.now(),
//             text: actionObject.payload
//         };
//         console.log(note);
//         return note;
//     }
// }
module.exports = mongoose.model('Note', noteSchema);
