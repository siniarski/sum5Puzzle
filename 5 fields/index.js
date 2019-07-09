const { getNextObject, getSum, outputResult } = require("./helpers");

const outputSums = (min, max, targetSum) => {
  let obj = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0
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

outputSums(0, 1000, 1000);
