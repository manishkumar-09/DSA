function Pyramid(n) {
  for (let i = 1; i < n; i++) {
    let temp = "";
    for (let j = 1; j < n - i; j++) {
      temp += " ";
    }
    for (let k = 1; k <= i; k++) {
      temp += "* ";
    }
    console.log(temp);
  }
}
Pyramid(5);
