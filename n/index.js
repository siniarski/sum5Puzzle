const {
  getInitialObject,
  getNextObject,
  getSum,
  outputResult,
} = require("./helpers");

const outputSums = (
  fields = ["a", "b", "c", "d", "e"],
  min = 0,
  max = 1000,
  targetSum = 1000
) => {
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

outputSums();
