const evenFibNumbers = require('./evenFibNumbers');

test('finds the sum of all even values of the fibonacci sequence up to value 100 to equal 44', () => {
  expect(evenFibNumbers(100)).toBe(44);
});

test('finds the sum of all even values of the fibonacci sequence up to value 90 to equal 44', () => {
  expect(evenFibNumbers(90)).toBe(44);
});


test('finds the sum of all even values of the fibonacci sequence up to value 4000000 to equal 4613732', () => {
  expect(evenFibNumbers(4000000)).toBe(4613732);
});