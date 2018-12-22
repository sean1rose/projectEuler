// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

const sumOfMultiplesOfThreeOrFive = (input) => {
  // input === 10
  const multiplesOf = (multiple, input) => {
    // multiple === 3
    // input === 10
    // input / multiple ==> times === 3
    const times = (input / multiple);
    // times === (10 / 3) === 3.3
    let tmpSum = 0;
    // let tmp = 1;
    let counter = 1;
    while (counter < times) {
      // counter = 1
      // tmpSum = 0;
      // tmpSum = 1 * 3
      // tmpSum = 3 
      // counter = 2
      tmpSum += counter * multiple; // 3
      console.log('tmpSum first - ', tmpSum);
      // tmpSum = 3; counter = 2
      // tmpSum = (3) + (2 * 3) = 9
      // counter = 3

      // tmpSum = 9; counter = 3
      // tmpSum = 9 + (3 * 3) = 18
      counter++;
    }
    console.log('tmpSum intermediate - ', tmpSum);
    return tmpSum;
  };
  const result = multiplesOf(3, input) + multiplesOf(5, input);
  console.log('final result - ', result);
  return result;
};

module.exports = sumOfMultiplesOfThreeOrFive;