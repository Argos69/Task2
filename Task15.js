import { length } from './strings'; // eslint-disable-line

// BEGIN (write your solution here)
const sum = (str) => {
  let result = 0;
  for (let i = 0; i < length(str); i += 1) {
    result += Number(str[i]);
  }

  return result;
};

const addDigits = (num) => {
  let result = num;
  while (result >= 10) {
    result = sum(String(result));
  }

  return result;
};

export default addDigits;
// END