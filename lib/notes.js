const add = obj => {
    let note = {
        text: obj.payload
    };
    console.log(note)
    return note;
};

//ABOVE EXECUTE

const execute = actionObject => {
    if (actionObject.type === 'add') {
        return add(actionObject);
        
    } else {
        return console.log('no proper action');
    }

    // series of ifs
    //switch
    // dictionary of functions

    // takes the type of what we did. And execute the function.
};



module.exports = {
    execute,
    add  
};