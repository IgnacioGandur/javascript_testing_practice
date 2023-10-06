function capitalize(string) {
    // Get first letter.
    const firstLetter = string.slice(0, 1).toUpperCase();
    // Get rest of string.
    const restOfString = string.slice(1, string.length);
    // Concatenate them and return it.
    const capitalizedString = firstLetter + restOfString;
    return capitalizedString;
}

function reverseString(string) {
    let newString = '';
    // Declare i to be the string length - 1 so the loop will start from the last item in the index.
    for (let i = string.length - 1; i >= 0; i -= 1) {
        // Append characters to the variable one by one on each iteration and decrease i by 1.
        newString += string[i];
    }
    return newString;
}

const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        return a / b;
    },
};

// This function deconstructs the array and transforms each character one by one into their
// corresponding ASCII value and appends it into an array.
function caesarCipher(string, shiftFactor = 1) {
    // Declare empty array to store the ascii value of the characters.
    const asciiCharactersCode = [];
    // Loop through every character of the string.
    for (let a = 0; a < string.length; a += 1) {
        // If character is Z in uppercase change it for A in uppercase and push it to the array.
        if (string.charCodeAt(a) === 90) {
            asciiCharactersCode.push(65);
        // If character is z in uppercase change it for a in uppercase and push it to the array.
        } else if (string.charCodeAt(a) === 122) {
            asciiCharactersCode.push(97);
        // If character is between "a" through "y", or "A" through "Y",
        // transform it to their respective ascii code minus the shift factor.
        // And push it into the array.
        } else if ((string.charCodeAt(a) >= 65 && string.charCodeAt(a) <= 89)
        || (string.charCodeAt(a) >= 97 && string.charCodeAt(a) <= 121)) {
            asciiCharactersCode.push(string.charCodeAt(a) + shiftFactor);
        } else {
            // If the character is other than a letter of the alphabet don't cipher it.
            // (is for numbers and punctuation characters.)
            asciiCharactersCode.push(string.charCodeAt(a));
        }
    }
    // Declare empty array to push the ciphered characters.
    const asciiTransformedSymbols = [];
    // Loop through the array of the character's ascii code.
    for (let b = 0; b < asciiCharactersCode.length; b += 1) {
        // If character is white space push white space into array.
        if (String.fromCharCode(asciiCharactersCode[b]) === 32) {
            asciiTransformedSymbols.push(' ');
        }
        // Transform ascii code to symbol character and push it to the array.
        asciiTransformedSymbols.push(String.fromCharCode(asciiCharactersCode[b]));
    }
    // Join array to create string and return it.
    const cipheredString = asciiTransformedSymbols.join('');
    return cipheredString;
}

function analyzeArray(arr) {
    return {
        // Sum all values and divide the result by the array length.
        average: arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
    };
}

module.exports = {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
};
