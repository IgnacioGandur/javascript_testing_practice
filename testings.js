function capitalize(string) {
    const firstLetter = string.slice(0, 1).toUpperCase();
    const restOfString = string.slice(1, string.length);
    const capitalizedString = firstLetter + restOfString;
    return capitalizedString;
}

function reverseString(string) {
    let newString = '';
    for (let i = string.length - 1; i >= 0; i -= 1) {
        newString += string[i];
    }
    return newString;
}

module.exports = {
    capitalize,
    reverseString,
};
