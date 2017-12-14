const {returnTwo, greeting, add, multiply, divide, subtract} = require('./functions')

test('returnTwo() should return 2', () => {
    expect(returnTwo()).toBe(2);
});

test('greeting() shoud return custom greeting', () => {
    expect(greeting('Spencer')).toBe('Hello, Spencer');
    expect(greeting('James')).toBe('Hello, James');
});

describe('Math Functions', () => {
    
    test('add() should return the sum of the two passed numbers', () => {
        expect(add(1, 3)).toBe(4);
        expect(add(2, 3)).toBe(5);
    });

    test('multiply() should return the two variables multiplied', () => {
        expect(multiply(3, 5)).toBe(15);
        expect(multiply(1, 10)).toBe(10);
    });

    test('divide() should return the two variables divided', () => {
        expect(divide(15, 3)).toBe(5);
        expect(divide(100, 20)).toBe(5);
    });

    test('subtract() should return the two variables subtracted', () => {
        expect(subtract(10, 7)).toBe(3);
        expect(subtract(90, 88)).toBe(2);
    });
})

