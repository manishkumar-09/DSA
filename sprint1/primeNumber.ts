/*
Checking for Prime Numbers
Difficulty: Easy
Topics: Basic Programming, Number Theory
Description: Write a program to determine if a number is prime.
Example:
Input: number = 7
Output: Prime
Explanation: 7 has no divisors other than 1 and itself, so it is a prime number.
*/

{
  const PrimeNumber = (N: number) => {
    if (N <= 0) {
      console.log("enter valid number");
      return;
    }

    let count: number = 0;
    for (let i = 1; i <= N; i++) {
      if (N % i === 0) count++;
    }
    count === 2 ? console.log("Prime") : console.log("Not prime");
  };
  const N: number = 0;
  const res = PrimeNumber(N);
}

{
  // check prime numbers from 1 to 10;
  const PrimeNumber = (n: number) => {
    for (let i = 2; i <= n; i++) {
      let flag: number = 0;
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          flag++;
          break;
        }
      }
      if (flag === 0) {
        console.log(`${i} is prime`);
      }
      //   else {
      //     console.log(`${i} is not prime`);
      //   }
    }
  };
  const n: number = 10;
  const res = PrimeNumber(n);
}
