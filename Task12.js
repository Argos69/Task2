import square from './square';

// BEGIN (write your solution here)
import { getTriangleArea } from './myMathModule';

const area1 = (n) => getTriangleArea(n, square(n) / 2);

export default area1;
// END