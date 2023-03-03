const sum = require ('./sum');

test('Suma de 2 numeros', () => {
    expect(sum(1, 2)).toBe(3);
})