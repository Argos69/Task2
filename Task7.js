const smallestDivisor = (num) => {
  // BEGIN (write your solution here)
  
  const iter = (acc) => {
    if (acc > num / 2) {
      return num;
    }
    else if (num % acc === 0) {
      return acc;
    }
     return iter(acc + 1);
  };
  return iter(2);
  // END
};

export default smallestDivisor;