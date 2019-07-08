module.exports = {
  getSum: ({ a, b, c, d, e }) => a + b + c + d + e,
  outputResult: ({ a, b, c, d, e }) =>
    `a = ${a}, b = ${b}, c = ${c}, d = ${d}, e = ${e}`,
  getInitialObject: () => ({
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0
  }),
  getNextObject: (obj, min = 0, max = 10) =>
    Object.entries(obj).reduce(
      (a, [key, value], index) => {
        if (index === 0 || a.carry === true) {
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
      },
      { newObj: {}, carry: false }
    )
};
