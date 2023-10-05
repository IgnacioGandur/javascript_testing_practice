function capitalize(string) {
    const firstLetter = string.slice(0, 1).toUpperCase();
    const restOfString = string.slice(1, string.length);
    const capitalizedString = firstLetter + restOfString;
    return capitalizedString;
}

function reverseString(string) {

}

module.exports = {
    capitalize,
    reverseString,
};
