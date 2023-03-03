
const calculator = require('./calculator');

test('Suma de 2 numeros', () => {
    expect(calculator.sum(4, 6)).toBe(10);
});

test('Resta de 2 numeros', () => {
    expect(calculator.substract(4, 6)).toBe(-2);
});

test('Multiplicacion de 2 numeros', () => {
    expect(calculator.multiply(4, 6)).toBe(24);
});

test('Division de 2 numeros', () => {
    expect(calculator.division(2, 1)).toBe(2);
});

test('Potencia de a elevado a la b', () => {
    expect(calculator.power(4, 6)).toBe(4096);
});

