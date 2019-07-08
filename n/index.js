const {
  getInitialObject,
  getNextObject,
  getSum,
  outputResult
} = require("./helpers");

const outputSums = (fields, min, max, targetSum) => {
  let obj = getInitialObject(fields);
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

outputSums(["a", "b", "c", "d", "e"], 0, 1000, 1000);
