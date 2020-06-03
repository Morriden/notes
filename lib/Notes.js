class Notes {
    static execute(actionObject) {
        switch (actionObject.type) {
            case 'add':
                return Notes.add(actionObject);
            default:
                console.log('Not Appropiate Command');
        }
    }
    static add(actionObject) {
        let note = {
            id: Date.now(),
            text: actionObject.payload
        };
        console.log(note);
        return note;
    }
}
module.exports = Notes;
