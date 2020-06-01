const isValid = array => {
    if (array[0] === '--add') {
        return true;
    } else {
        return false;
    }
};

module.exports = {
    isValid
};