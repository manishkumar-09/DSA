{
  function ArmstrongNumber(num: number) {
    let sum: number = 0;
    let len: number = num.toString().length;
    let temp: number = num;
    while (temp > 0) {
      let digit = Math.floor(temp % 10);
      sum += digit ** len;
      temp = Math.floor(temp / 10);
    }
    if (sum === num) {
      console.log(num, "is armstrong number");
    } else {
      console.log(num, "is Not an armstrong number");
    }
  }
  ArmstrongNumber(153);
}
