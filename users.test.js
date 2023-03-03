// You already have the methods imported
const { default: expect } = require('expect');
const users = require('./data');
const {getUser, getUsers} = require('./users');


// Make a test to verify if the method getUser(id) works correctly
// Verify any data of the resulting object you want

test('verificar si getUser(id) funciona correctamente', () => {
    expect(getUser(3).id).toBe(3);
});

test('obtener todos los usuarios', () => {
    expect(getUsers()).toEqual(users);
 })



// READ documentation