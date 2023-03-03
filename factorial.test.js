const fac = require ('./factorial')

test('el numero factorial de 4 es 24', () => {
    expect(fac(4)).toBe(24);
})

test('el numero factorial de 5 es 120', () => {
    expect(fac(5)).toBe(120);
})

test('el numero factorial de 2 es 2', () => {
    expect(fac(2)).toBe(2);
})

test('el numero factorial de 4 es 24', () => {
    expect(fac(4)).toBe(50);
})