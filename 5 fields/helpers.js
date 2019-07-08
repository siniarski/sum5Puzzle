module.exports = {
  getSum: ({ a, b, c, d, e }) => a + b + c + d + e,
  outputResult: ({ a, b, c, d, e }) =>
    `a = ${a}, b = ${b}, c = ${c}, d = ${d}, e = ${e}`,
  getNextObject: (obj, min = 0, max = 10) => {
    const step = (a, [key, value], carryOverride = false) => {
      if (carryOverride || a.carry === true) {
        let newValue = value + 1;
        let carry = false;
        if (newValue > max) {
          newValue = min;
          carry = true;
        }
        return {
          newObj: {
            ...a.newObj,
            [key]: newValue
          },
          carry
        };
      }
      return {
        newObj: {
          ...a.newObj,
          [key]: value
        },
        carry: false
      };
    };

    const stepA = step({ newObj: {}, carry: false }, ["a", obj.a], true);
    const stepB = step(stepA, ["b", obj.b]);
    const stepC = step(stepB, ["c", obj.c]);
    const stepD = step(stepC, ["d", obj.d]);
    const stepE = step(stepD, ["e", obj.e]);
    return stepE;
  }
};
