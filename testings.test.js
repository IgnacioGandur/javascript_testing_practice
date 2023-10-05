const {capitalize, reverseString, calculator, caesarCipher, analyzeArray} = require('./testings');


test('Capitalize', () => {
    expect(capitalize('sample string')).toBe('Sample string');
});
test('Reverse string', () => {
    expect(reverseString('String reversed.')).toBe('.desrever gnirtS');
})
test('Calculator add', () => {
    expect(calculator.add(5, 5)).toBe(10);
})
test('Calculator subtract', () => {
    expect(calculator.subtract(25, 10)).toBe(15);
})
test('Calculator multiply', () => {
    expect(calculator.multiply(10, 10)).toBe(100);
})
test('Calculator divide', () => {
    expect(calculator.divide(25, 5)).toBe(5);
})
test('Caesar cipher, shift factor of 1 ', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1)).toBe('bcdefghijklmnopqrstuvwxyza');
})
test('Caesar cipher, shift factor of 2', () => {
    expect(caesarCipher('Defend the east wall of the castle.', 2)).toBe('Fghgpf vjg gcuv ycnn qh vjg ecuvng.');
})
test('Caesar cipher, shift factor of 3 ', () => {
    expect(caesarCipher('Hello world!', 3)).toBe('Khoor zruog!');
})
test('Analyze array', () => {
    expect(analyzeArray([2,6,4,7,1,6,290,23,66])).toEqual({average:45, min:1, max:290, length:9});
})