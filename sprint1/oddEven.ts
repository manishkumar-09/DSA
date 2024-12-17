// Determining Even/Odd Numbers
// Difficulty: Easy
// Topics: Basic Programming
// Description: Write a program to check whether a number is even or odd.
// Example:
// Input: number = 4
// Output: Even
// Explanation: Since 4 is divisible by 2, it is an even number

{
  function CheckOddEven(N: number): boolean {
    if (N % 2 === 0) {
      return true;
    }
    return false;
  }
  const N: number = 3;
  const res = CheckOddEven(N);
  res ? console.log(N, "is Even") : console.log(N, "is Odd Number");
}
