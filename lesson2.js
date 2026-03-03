
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
console.log([2, 3, 4].myFilter((el,index,array) =>{
    console.log(array);
    
    console.log(index);
    
   return  el > 2
    }));



[alert,confirm,prompt]=[confirm,prompt,alert]

window.alert()
window.confirm()
window.prompt()
// window.confirm()//alertx