const fB = require("./fizzBuzz");

test('Numero 15 = FizzBuzz', () => {
    expect(fB(15)).toBe('FizzeBuzz');
})

test('Numero 3 = Fizze', () => {
    expect(fB(3)).toBe('Fizze');
})

test('Numero 5 = Buzz', () => {
    expect(fB(5)).toBe('Buzz');
})

test('Numero 4 = 4', () => {
    expect(fB(4)).toBe(4);
})