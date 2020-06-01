// const isValid = array => {
//     if (array[0] === '--add' || array[0] === '-a' && (!array[1] === '')) {
//         return true;
//     } else {
//         return false;
//     }
// };

const isValid = obj => {
    if (Object.keys(obj.includes('-a' || '--add'))) {
        return true;
    } else {
        return false;
    }
};

const parse = array => {
    return {
        type: array[0],
        payload: array[1]
    };
};

module.exports = {
    isValid,
    parse
};