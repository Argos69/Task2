// BEGIN (write your solution here)
const isPrime = (num) => {
  let del;
  if (num % 2 === 0) {
    del = num / 2;
  }
  else del = (num - 1) / 2;
  if (num < 2) {
    return false;
  }
  for (; del > 1; del--) {
    if (num % del === 0) {
      return false
    }
  }
  return true;
};
// END

export default isPrime;