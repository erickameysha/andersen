class Calculator {
  constructor(x, y) {
    if (!Number.isFinite(x) || !Number.isFinite(y)) {
      throw new Error("Invalid values");
    }
    this.x = x
    this.y = y


    this.logSum =this.logSum.bind(this)
    this.logMul =this.logMul.bind(this)
    this.logSub =this.logSub.bind(this)
    this.logDiv =this.logDiv.bind(this)
  }
  setX(x){
    if(!Number.isFinite(x)){
        throw new Error('Invalid X number')
    }
    this.x = x
  }
   setY(y){
    if(!Number.isFinite(y)){
        throw new Error('Invalid Y number')
    }
    this.y = y
  }
  logSum(){
    console.log(this.x);
    
    return this.x + this.y
  }
  logMul(){
    return this.x * this.y
  }
  logSub(){
    return this.x -this.y
  }
  logDiv(){
    if(this.y===0){
       return new Error('Division by zero')
    }
    return this.x / this.y
  }
}
const calculator = new Calculator(10, 5);

console.log(calculator.logSum()); // 15

console.log(calculator.logMul()); // 50
console.log(calculator.logSub()); // 5
console.log(calculator.logDiv()); // 2

console.log(calculator.logDiv()); // 2
const logSumRef = calculator.logSum;
console.log(logSumRef()); // 15 
calculator.setY(0)
console.log(calculator.logDiv());
