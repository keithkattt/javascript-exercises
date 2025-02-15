const removeFromArray = function(array, ...removeItems) {
    const filteredArray = array.filter(number => !removeItems.includes(number));
    
    return filteredArray
};

// Do not edit below this line
module.exports = removeFromArray;
