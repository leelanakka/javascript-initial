let number = process.argv[2];

const sqr = function (number) {
  let square = number * number;
  return square;
}

console.log(sqr(number));
