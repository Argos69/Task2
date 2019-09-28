// BEGIN (write your solution here)
const finalGrade = (e, p) => {
  if (e > 90 || p > 10) { return 100; }
  else if (e > 75 && (p > 5 || p === 5)) { return 90; }
  else if (e > 50 && (p > 2 || p === 2)) { return 75; }
  else { return 0; } };
// END

export default finalGrade;