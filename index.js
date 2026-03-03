console.log("hello andersen");


console.log(`Ba${parseInt("Hello world!")}a`);
console.log(`Ba${4 / "world"}a`);
console.log(`Ba${Math.sqrt(-4)}a`);
console.log(`Ba${5 + NaN}a`);

const convert = (number) => {
  let result = '';
  while (number > 0) {
    result = (number % 2) + result;
    number = Math.floor(number/2)
  }
  return result || 0
};

console.log(convert(20));


