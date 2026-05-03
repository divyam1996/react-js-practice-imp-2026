const compose = (...fns) => {
  return function (value) {
    return fns.reduceRight((acc, fn) => fn(acc), value);
  };
};

const add2 = (x) => x + 2;
const multiply3 = (x) => x * 3;
const square = (x) => x * x;

const result = compose(square, multiply3, add2);

console.log(result(2));