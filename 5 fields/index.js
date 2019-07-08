const { getNextObject, getSum, outputResult } = require("./helpers");

const outputSums = (min, max, sum) => {
  let obj = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0
  };

  while (true) {
    if (getSum(obj) === sum) {
      console.log(outputResult(obj));
    }

    const { newObj, carry } = getNextObject(obj, min, max);
    obj = { ...newObj };

    if (carry) {
      break;
    }
  }
};

outputSums(0, 1000, 1000);
