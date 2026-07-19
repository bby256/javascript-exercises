const removeFromArray = function(arr, ...removal) {
    let newArray = arr.slice();
    for (let rem of removal) {
        while(newArray.find(el => el === rem)) {
            newArray.splice(newArray.indexOf(rem), 1);
        }
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
