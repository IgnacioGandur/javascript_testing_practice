const {capitalize, reverseString, calculator, caesarCipher} = require('./testings');


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
test('Caesar cipher', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz')).toBe('bcdefghijklmnopqrstuvwxyza');
})
test('Caesar cipher #2', () => {
    expect(caesarCipher('Defend the east wall of the castle.')).toBe('Efgfoe uif fbtu xbmm pg uif dbtumf.');
})