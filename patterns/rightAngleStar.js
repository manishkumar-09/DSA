function RightAngleTriangle(N) {
  for (let i = 0; i < N; i++) {
    let temp = "";
    for (let j = 0; j < i; j++) {
      temp += "* ";
    }
    console.log(temp);
  }
}
RightAngleTriangle(5);
