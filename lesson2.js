Array.prototype.myFilter = function (callback, thisArg) {
  let filteredArr = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      const element = this[i];
      //put "this" in callback context using call
      if (callback.call(thisArg, element, i, this)) {
        filteredArr.push(element);
      }
    }
  }
  return filteredArr;
};
const obj = {
  min: 2,
};
console.log([2, 3, 4].myFilter((el) => el > 2));

console.log(
  [2, 3, 5, 6, 1, 2].myFilter(function (el) {
    return el <= this.min;
  },obj));

function add(...args) {
  if (args.length >= 2) {
    return args.reduce((currentValue, value) => currentValue + value);
  }
  return (...arg2) => {
    const allArgs = [...args, ...arg2];

    return allArgs.reduce((rev, value) => rev + value, 0);
  };
}
console.log(add(1, 2));
console.log(add(1)(2));

[alert, confirm, prompt] = [confirm, prompt, alert];

window.alert()
window.confirm()
window.prompt()
window.confirm()//alertx
