function capitalize(string) {
    const firstLetter = string.slice(0, 1).toUpperCase();
    const restOfString = string.slice(1, string.length);
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
    const asciiCharactersCode = [];
    for (let a = 0; a < string.length; a += 1) {
        if (string.charCodeAt(a) === 90) {
            asciiCharactersCode.push(65);
        } else if (string.charCodeAt(a) === 122) {
            asciiCharactersCode.push(97);
        } else if ((string.charCodeAt(a) >= 65 && string.charCodeAt(a) <= 89)
        || (string.charCodeAt(a) >= 97 && string.charCodeAt(a) <= 121)) {
            asciiCharactersCode.push(string.charCodeAt(a) + shiftFactor);
        } else {
            asciiCharactersCode.push(string.charCodeAt(a));
        }
    }
    const asciiTransformedSymbols = [];
    for (let b = 0; b < asciiCharactersCode.length; b += 1) {
        if (String.fromCharCode(asciiCharactersCode[b]) === 32) {
            asciiTransformedSymbols.push(' ');
        }
        asciiTransformedSymbols.push(String.fromCharCode(asciiCharactersCode[b]));
    }
    const cipheredString = asciiTransformedSymbols.join('');
    return cipheredString;
}

function analyzeArray(arr) {
    return {
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
