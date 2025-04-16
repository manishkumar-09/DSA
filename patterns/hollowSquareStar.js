function hollowSquareStars(N) {
  for (let i = 0; i < N; i++) {
    let bag = "";
    for (let j = 0; j < N; j++) {
      if (i === 0 || i === N - 1 || j === 0 || j === N - 1) {
        bag += "* ";
      } else {
        bag += "  ";
      }
    }
    console.log(bag);
  }
}
hollowSquareStars(5);
