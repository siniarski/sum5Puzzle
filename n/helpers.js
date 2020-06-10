module.exports = {
  getSum: (obj) => Object.values(obj).reduce((a, value) => a + value, 0),
  outputResult: (obj) =>
    Object.entries(obj).reduce(
      (a, [key, value], index) =>
        `${a}${index !== 0 ? ", " : ""}${key} = ${value}`,
      ""
    ),
  getInitialObject: (fields) => fields.reduce((a, c) => ({ ...a, [c]: 0 }), {}),
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
              [key]: newValue,
            },
            carry,
          };
        }
        return {
          newObj: {
            ...a.newObj,
            [key]: value,
          },
          carry: false,
        };
      },
      { newObj: {}, carry: false }
    ),
};
