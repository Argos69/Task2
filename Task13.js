// BEGIN (write your solution here)
const square = (num) => {
  const rez = num ** 2;
  return rez;
};

const sumOfSquares = (s1, s2) => {
  const sos = square(s1) + square(s2);
  return sos;
};

const squareSumOfSquares = (sq1, sq2) => {
  const ssos = square(sumOfSquares(sq1, sq2));
  return ssos;
};
// END

export default {
  square,
  sumOfSquares,
  squareSumOfSquares,
};