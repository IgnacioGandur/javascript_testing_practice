const {capitalize, reverseString} = require('./testings');


test('Capitalize', () => {
    expect(capitalize('sample string')).toBe('Sample string');
});
