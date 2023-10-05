const {capitalize, reverseString, calculator} = require('./testings');


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