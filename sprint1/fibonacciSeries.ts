// Generating the Fibonacci Series
// Difficulty: Easy
// Topics: Basic Programming, Sequences
// Description: Write a program to generate the Fibonacci series up to a given number.
// Example:
// Input: limit = 10
// Output: [0, 1, 1, 2, 3, 5, 8]
// Explanation: The Fibonacci series up to 10 is generated as [0, 1, 1, 2, 3, 5, 8].

{
  // there is two ways to approach this problem

  //recursive way
  function FibonacciSeries1(n: number): number[] {
    let t1: number = 0,
      t2: number = 1;
    let series: number[] = [t1, t2];
    for (let i = 2; i <= n; i++) {
      series.push(series[i - 1] + series[i - 2]);
    }

    return series;
  }
  console.log(FibonacciSeries1(5));

  // second approach

  function FibonacciSeries2(n: number) {
    const series: number[] = [];
    let a: number = 0,
      b: number = 1;
    series.push(a);
    if (n > 1) {
      series.push(b);
    }
    for (let i = 2; i <= n; i++) {
      const nextTerm = a + b;
      series.push(nextTerm);
      a = b;
      b = nextTerm;
    }
    return series;
  }
  console.log(FibonacciSeries2(5));
}
