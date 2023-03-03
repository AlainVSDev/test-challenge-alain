//const { default: expect } = require('expect');

const calculator = require('./calculator2');

test('adds a + b', () => {
    expect(calculator.sum(4, 6)).toBe(10);
})

test('substracts a - b', () => {
   expect(calculator.substract(4, 6)).toBe(-2);
})

test('multiplies a * b', () => {
    expect(calculator.multiply(4, 6)).toBe(24);
})

test('divides a / b', () => {
     expect(calculator.division(5, 2)).toBe(2.5);
})

test('Raises to power a ^ b', () => {
    expect(calculator.power(4, 6)).toBe(4096);
})