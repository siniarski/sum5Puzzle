const {
  getInitialObject,
  getNextObject,
  getSum,
  outputResult
} = require("./helpers5");

const outputSums = (fields, min, max, total) => {
  let obj = getInitialObject(fields);
  while (true) {
    if (getSum(obj) === total) {
      console.log(outputResult(obj));
    }

    const { newObj, carry } = getNextObject(obj, min, max);
    obj = { ...newObj };

    if (carry) {
      break;
    }
  }
};

outputSums(["a", "b", "c", "d", "e"], 0, 10, 10);
