const {capitalize, reverseString} = require('./testings');


test('Capitalize', () => {
    expect(capitalize('sample string')).toBe('Sample string');
});
test('Reverse string', () => {
    expect(reverseString('String reversed.')).toBe('.desrever gnirtS');
})