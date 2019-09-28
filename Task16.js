import { length, toUpperCase } from './strings';

// BEGIN (write your solution here)
export default (str) => {
  let res = '';
  for (let i = 0; i < length(str); i += 1) {
    const firstUpper = (i === 0 || str[i - 1] === ' ');
    res += firstUpper ? toUpperCase(str[i]) : str[i];
  }

  return res;
};
// END