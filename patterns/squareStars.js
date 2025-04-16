function SquareStar(N) {
  for (let i = 0; i < N; i++) {
    let temp = "";
    for (let j = 0; j < N; j++) {
      temp += "* ";
    }
    console.log(temp);
  }
}
SquareStar(5);
