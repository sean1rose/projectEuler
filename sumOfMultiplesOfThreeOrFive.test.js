const sumOfMultiplesOfThreeOrFive = require('./sumOfMultiplesOfThreeOrFive');

test('finds the sum of all multiples of 3 or 5 below 10 to equal 23', () => {
  expect(sumOfMultiplesOfThreeOrFive(10)).toBe(23);
});

test('finds the sum of all multiples of 3 or 5 below 1000 to equal 266333', () => {
  expect(sumOfMultiplesOfThreeOrFive(1000)).toBe(266333);
});

// 20 -> (3, 6, 9, 12, 15, 18) + (5, 10, 15) = 93
test('finds the sum of all multiples of 3 or 5 below 20 to equal 93', () => {
  expect(sumOfMultiplesOfThreeOrFive(20)).toBe(93);
});

// 5 -> (3) + (0) = 3
test('finds the sum of all multiples of 3 or 5 below 5 to equal 3', () => {
  expect(sumOfMultiplesOfThreeOrFive(5)).toBe(3);
});

// 15 -> (3, 6, 9, 12) + (5, 10) = 45
test('finds the sum of all multiples of 3 or 5 below 15 to equal 45', () => {
  expect(sumOfMultiplesOfThreeOrFive(15)).toBe(45);
});

