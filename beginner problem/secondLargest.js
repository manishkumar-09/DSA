// const arr = [1, 2, 4, 2, 8];
const arr = [1, 2, 9, 8];

let max = -Infinity;
let second_max = -Infinity;

for (let ele of arr) {
  if (ele > max) {
    second_max = max;
    max = ele;
  } else if (ele > second_max && ele !== max) {
    second_max = ele;
  }
}
console.log(second_max);
