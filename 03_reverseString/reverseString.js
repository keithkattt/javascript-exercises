const reverseString = function(str) { 
    let strLength = str.length;
    let lettersOfString = str.split('');
    let popLetter = '';
    let reversedLetters = '';

    for (i = 0; i < strLength; i++){
        popLetter = lettersOfString.pop();
        reversedLetters += popLetter;
    }
    
    return reversedLetters;
};

// Do not edit below this line
module.exports = reverseString;
