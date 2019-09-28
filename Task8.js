// BEGIN (write your solution here)
const smallestDivisor = (num) => {
  if (num === 1) {
    return 1;
  }
  else if (num < 1) {
    return NaN;
  }
  else {
    let acc = 2;
  while (num % acc !== 0) {
    acc= acc + 1;
  }
  return acc;
  }
  
}
// END

export default smallestDivisor;