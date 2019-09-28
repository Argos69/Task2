// BEGIN (write your solution here)
const reverse = (str) => {
  let rev = '';
  let i = 0;
  i = str.length - 1;
  while (i >= 0) {
    rev = rev + str[i];
    i = i - 1;
  }
  return rev;
};
// END

export default reverse;