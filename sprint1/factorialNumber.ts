// Finding the Factorial of a Number
// Difficulty: Easy
// Topics: Basic Programming, Mathematical Computations
// Description: Write a program to compute the factorial of a given number.
// Example:
// Input: number = 5
// Output: 120
// Explanation: 5! (factorial) is 5 × 4 × 3 × 2 × 1 = 120.
{
  function FactorialOfNumber(n: number): number {
    let res: number = 1;
    for (let i = n; i >= 2; i--) {
      res *= i;
    }
    return res;
  }
  console.log(FactorialOfNumber(5));

  // recursive approach

  function recursiveFactorial(N: number): number {
    if (N < 0) return -1;
    if (N === 0 || N === 1) {
      return 1;
    }
    return N * recursiveFactorial(N - 1);
  }
  console.log(recursiveFactorial(5));
}
