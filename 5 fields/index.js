const { getNextObject, getSum, outputResult } = require("./helpers");

const outputSums = (min = 0, max = 1000, targetSum = 1000) => {
  let obj = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
  };

  while (true) {
    if (getSum(obj) === targetSum) {
      console.log(outputResult(obj));
    }

    const { newObj, carry } = getNextObject(obj, min, max);

    if (carry) {
      break;
    }
    obj = newObj;
  }
};

outputSums();
